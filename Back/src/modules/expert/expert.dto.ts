import { IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateExpertDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsUUID()
  categoryId: string;
}

export class UpdateExpertDto extends CreateExpertDto {}
