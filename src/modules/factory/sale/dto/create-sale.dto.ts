import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleDto {
  @ApiProperty({ example: 199.99, description: 'The total amount of the sale' })
  @IsNumber()
  total: number;

  @ApiProperty({ example: '2024-10-15', description: 'The date of the sale' })
  @IsString()
  date: string;

  @ApiProperty({ example: 1, description: 'The ID of the customer', required: false })
  @IsOptional()
  @IsNumber()
  customerId?: number;
}
