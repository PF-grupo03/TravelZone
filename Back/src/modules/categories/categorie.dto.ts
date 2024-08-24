import { IsString, IsNotEmpty, IsBoolean, IsEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmpty()
  isActive?: boolean;
}

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  category: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}