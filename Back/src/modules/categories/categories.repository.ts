import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './categorie.dto';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,
  ) {}

  async getCategories() {
    try {
      return this.categoriesRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching categories from the database.');
    }
  }

  async addCategories(data: CreateCategoryDto[]) {
    try {
      await Promise.all(
        data.map(async (element) => {
          await this.categoriesRepository
            .createQueryBuilder()
            .insert()
            .into(CategoryEntity)
            .values({ name: element.category })
            .orIgnore()
            .execute();
        }),
      );
      return 'Categorías Agregadas Correctamente';
    } catch (error) {
      throw new InternalServerErrorException('Error adding categories to the database.');
    }
  }
}
