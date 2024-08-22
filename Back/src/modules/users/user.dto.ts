import { PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsPositive,
  Min,
  IsEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  dni: number;

  @IsNumber()
  phone: number;

  @IsString()
  address: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  birthday: string;

  @IsEmpty()
  isActive?: boolean;

  @IsEmpty()
  IsAdmin?: boolean;
}

export class UpdateUserDto {
  @IsOptional()
  username?: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  password?: string;

  @IsOptional()
  dni?: number;

  @IsOptional()
  phone?: number;

  @IsOptional()
  address?: string;

  @IsOptional()
  country?: string;

  @IsOptional()
  city?: string;

  @IsOptional()
  birthday?: string;

  @IsEmpty()
  isActive?: boolean;

  @IsEmpty()
  IsAdmin?: boolean;
}

export class FiltersUsersDto {
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
  email: string | undefined;
}


export class LoginUserDto extends PickType(CreateUserDto, [
  'email',
  'password'
]) {}

