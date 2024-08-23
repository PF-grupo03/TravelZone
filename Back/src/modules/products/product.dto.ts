import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsEmpty,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsString()
  imgUrl: string;

  @IsEmpty()
  isActive?: boolean;

  @IsString()
  categories: string;
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
  categories?: string;
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
