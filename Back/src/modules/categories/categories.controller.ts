import { Controller, Get, Post, Body, BadRequestException, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './categorie.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories() {
    return this.categoriesService.getCategories();
  }

  @Post()
  async addCategories(@Body(new ValidationPipe({ whitelist: true })) data: CreateCategoryDto[]) {
    if (!data.length) {
      throw new BadRequestException('No categories provided.');
    }
    return this.categoriesService.addCategories(data);
  }

  @Put('update')
  async updateCategory(@Body('id') id: string, @Body(new ValidationPipe({ whitelist: true })) data: CreateCategoryDto) {
    return this.categoriesService.updateCategory(id, data);
  }

  @Put('desactivate')
  async desactivateCategory(@Body('id') id: string) {
    return this.categoriesService.desactivateCategory(id);
  }
}
