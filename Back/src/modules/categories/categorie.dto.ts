import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'The name of the category',
    example: 'Electronics',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'Indicates if the category is active',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean = true;
}

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'The name of the category',
    example: 'Electronics',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'Indicates if the category is active',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean = true;
}
