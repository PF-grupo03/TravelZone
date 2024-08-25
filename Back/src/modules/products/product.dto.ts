import { Transform, Type } from 'class-transformer';
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
    description: 'Nombre del paquete de viaje',
    example: 'Medellín + San Andrés: puesta de sol urbana e isla desierta',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Descripción detallada del paquete de viaje',
    example: 'Paquete de 6 días y 5 noches que incluye visitas a Medellín y San Andrés, con tours a la Piedra del Peñón y excursiones en bote a los cayos.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Precio del paquete de viaje',
    example: 1250,
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'Cantidad de paquetes disponibles',
    example: 20,
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  stock: number;

  @ApiProperty({
    description: 'URL de la imagen del paquete de viaje',
    example: 'https://example.com/medellin-sanandres.jpg',
  })
  @IsEmpty()
  imgUrl: string;

  @ApiHideProperty()
  @IsEmpty()
  isActive?: boolean;

  @ApiProperty({
    description: 'Categorías asociadas al paquete de viaje',
    example: ['adventure', 'relax'],
  })
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
  @ApiPropertyOptional({
    description: 'Nombre del paquete de viaje',
    example: 'Medellín + San Andrés: puesta de sol urbana e isla desierta',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Descripción detallada del paquete de viaje',
    example: 'Paquete de 6 días y 5 noches que incluye visitas a Medellín y San Andrés, con tours a la Piedra del Peñón y excursiones en bote a los cayos.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Precio del paquete de viaje',
    example: 1250,
  })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({
    description: 'Cantidad de paquetes disponibles',
    example: 20,
  })
  @IsOptional()
  @IsNumber()
  stock?: number;

  @ApiPropertyOptional({
    description: 'URL de la imagen del paquete de viaje',
    example: 'https://example.com/medellin-sanandres.jpg',
  })
  @IsEmpty()
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
    description: 'Limitar el número de resultados',
    example: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  limit?: number;

  @ApiPropertyOptional({
    description: 'Número de página para la paginación',
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  page?: number;

  @ApiPropertyOptional({
    description: 'Filtrar por nombre del paquete de viaje',
    example: 'Medellín + San Andrés',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Filtrar por precio',
    example: 1250,
  })
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  price?: number;
}
