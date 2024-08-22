import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { FiltersProductsDto } from './product.dto';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
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
      });
    } catch (error) {
      throw new InternalServerErrorException('Error obteniendo productos');
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
}
