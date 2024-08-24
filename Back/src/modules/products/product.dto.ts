import { Transform, Type } from 'class-transformer';
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
  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  stock: number;

  @IsEmpty()
  imgUrl: string;

  @IsEmpty()
  isActive?: boolean;

  @IsArray()
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  @Transform(({ value }) => {
    // Intenta convertir el string a un array
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch (e) {
        // Si no se puede convertir, retorna un array vacío o lanza un error
        return [];
      }
    }
    return value; // Si ya es un array, lo devuelve tal cual
  })
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

  @IsEmpty()
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
