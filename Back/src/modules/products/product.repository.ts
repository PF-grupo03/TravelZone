import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import {
  CreateProductDto,
  FiltersProductsDto,
  UpdateProductDto,
} from './product.dto';
import { CategoryEntity } from '../categories/category.entity';
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import toStream from 'buffer-to-stream';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoriesRepository: Repository<CategoryEntity>,
  ) {}

  async getProducts(params?: FiltersProductsDto) {
    const { limit, page, name, price } = params;
    try {
      return await this.productsRepository.find({
        where: {
          name: name || undefined,
          price: price || undefined,
          isActive: true,
        },
        take: limit || undefined,
        skip: page || undefined,
        relations: {
          categories: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        `Error obteniendo productos ${error}`,
      );
    }
  }

  async getProductById(id: string) {
    try {
      const product = await this.productsRepository.findOne({
        where: { id, isActive: true },
        relations: {
          categories: true,
        },
      });
      if (!product) {
        throw new BadRequestException('ID de producto incorrecto');
      }
      return product;
    } catch (error) {
      throw new InternalServerErrorException('Error obteniendo el producto');
    }
  }

  async createProduct(product: CreateProductDto, file: Express.Multer.File) {
    try {
      const categories = await this.categoriesRepository.find({
        where: {
          isActive: true,
        },
      });
      const categoryMatch = categories.filter((category) => {
        return product.categories.includes(category.name);
      });
      if (categoryMatch.length !== product.categories.length) {
        throw new BadRequestException('Categorías no fueron encontradas');
      }
      const response: UploadApiResponse = await new Promise(
        (resolve, reject) => {
          const upload = cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: 'travel_zone' },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result as UploadApiResponse);
              }
            },
          );
          toStream(file.buffer).pipe(upload);
        },
      );
      const newProduct = this.productsRepository.create({
        ...product,
        categories: categoryMatch,
        imgUrl: response.secure_url,
      });
      return await this.productsRepository.save(newProduct);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error obteniendo el producto');
    }
  }

  async updateProduct(id: string, product: UpdateProductDto) {
    try {
      const productById = await this.productsRepository.findOne({
        where: { id, isActive: true },
        relations: {
          categories: true,
        },
      });
      if (!productById) {
        throw new Error('Id de producto inexistente');
      }
      await this.productsRepository.update(id, product);
      return await this.productsRepository.findOne({
        where: { id, isActive: true },
        relations: {
          categories: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Error actualizando el producto');
    }
  }

  async deleteProduct(id: string) {
    try {
      const productById = await this.productsRepository.findOne({
        where: { id, isActive: true },
        relations: {
          categories: true,
        },
      });
      if (!productById) {
        throw new Error('Id de producto inexistente');
      }
      if (
        productById.imgUrl &&
        productById.imgUrl.includes('res.cloudinary.com')
      ) {
        const publicId = productById.imgUrl.split('/').pop()?.split('.')[0];
        if (publicId) {
          await cloudinary.uploader.destroy(`travel_zone/${publicId}`);
        }
      }
      productById.isActive = false;
      await this.productsRepository.save(productById);
      return 'Producto eliminado correctamente';
    } catch (error) {
      throw new InternalServerErrorException('Error eliminando el producto');
    }
  }
}
