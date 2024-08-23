import { Type } from 'class-transformer';
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
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  @IsString()
  imgUrl: string;

  @IsEmpty()
  isActive?: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CategoryEntity)
  categories: string[];
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  stock?: number;

  @IsOptional()
  @IsString()
  imgUrl?: string;

  @IsEmpty()
  isActive?: boolean;

  @IsEmpty()
  categories?: CategoryEntity[];
}

export class FiltersProductsDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  limit: number | undefined;

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  page: number | undefined;

  @IsOptional()
  name: string | undefined;

  @IsOptional()
  @Type(() => Number)
  @Min(0)
  price: number | undefined;
}
