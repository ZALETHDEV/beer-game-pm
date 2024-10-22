import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop', description: 'The name of the product' })
  @IsString()
  name: string;

  @ApiProperty({ example: 999.99, description: 'The price of the product' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'A high-performance laptop', description: 'A description of the product' })
  @IsString()
  description: string;

  @ApiProperty({ example: 1, description: 'The ID of the category', required: false })
  @IsOptional()
  @IsNumber()
  categoryId?: number;
}
