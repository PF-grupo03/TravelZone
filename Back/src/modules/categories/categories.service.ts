import { Injectable, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './categorie.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async getCategories() {
    try {
      return this.categoriesRepository.getCategories();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching categories.');
    }
  }

  async addCategories(data: CreateCategoryDto[]) {
    if (!data.length) {
      throw new BadRequestException('No categories provided.');
    }

    try {
      return await this.categoriesRepository.addCategories(data);
    } catch (error) {
      throw new InternalServerErrorException('Error adding categories.');
    }
  }
}
