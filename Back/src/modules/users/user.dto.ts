import { PickType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsPositive,
  Min,
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

  @IsDate()
  birthday: Date;

  @IsBoolean()
  @IsOptional()
  IsAdmin?: boolean = false;
}

export class UpdateUserDto extends CreateUserDto {}

export class FiltersUsersDto {
  @IsOptional()
  @IsPositive()
  limit: number | undefined;

  @IsOptional()
  @Min(0)
  offset: number | undefined;

  @IsOptional()
  name: string | undefined;

  @IsOptional()
  email: string | undefined;
}


export class LoginUserDto extends PickType(CreateUserDto, [
  'email',
  'password'
]) {}

