import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional, ApiHideProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsEmpty,
  IsOptional,
  IsPositive,
  Min,
  IsArray,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { CategoryEntity } from '../categories/category.entity';

export class CreateProductDto {
  @ApiProperty({
    description: 'Name of the product',
    example: 'Laptop',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'High-performance laptop with 16GB RAM',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 1200,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'Stock quantity of the product',
    example: 50,
  })
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty({
    description: 'Image URL of the product',
    example: 'https://example.com/laptop.jpg',
  })
  @IsNotEmpty()
  @IsString()
  imgUrl: string;

  @ApiHideProperty()
  @IsEmpty()
  isActive?: boolean;

  @ApiProperty({
    description: 'Categories associated with the product',
    example: ['Electronics', 'Computers'],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CategoryEntity)
  categories: string[];
}

export class UpdateProductDto {
  @ApiPropertyOptional({
    description: 'Name of the product',
    example: 'Laptop',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Description of the product',
    example: 'High-performance laptop with 16GB RAM',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Price of the product',
    example: 1200,
  })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({
    description: 'Stock quantity of the product',
    example: 50,
  })
  @IsOptional()
  @IsNumber()
  stock?: number;

  @ApiPropertyOptional({
    description: 'Image URL of the product',
    example: 'https://example.com/laptop.jpg',
  })
  @IsOptional()
  @IsString()
  imgUrl?: string;

  @ApiHideProperty()
  @IsEmpty()
  isActive?: boolean;

  @ApiHideProperty()
  @IsEmpty()
  categories?: CategoryEntity[];
}

export class FiltersProductsDto {
  @ApiPropertyOptional({
    description: 'Limit the number of results',
    example: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  limit?: number;

  @ApiPropertyOptional({
    description: 'Page number for pagination',
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  page?: number;

  @ApiPropertyOptional({
    description: 'Filter by name',
    example: 'Laptop',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Filter by price',
    example: 1200,
  })
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  price?: number;
}
