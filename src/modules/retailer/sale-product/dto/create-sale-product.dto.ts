import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleProductDto {
  @ApiProperty({ example: 2, description: 'The quantity of the product sold' })
  @IsNumber()
  quantity: number;

  @ApiProperty({ example: 199.99, description: 'The unit price of the product' })
  @IsNumber()
  unitPrice: number;

  @ApiProperty({ example: 1, description: 'The ID of the sale' })
  @IsNumber()
  saleId: number;

  @ApiProperty({ example: 1, description: 'The ID of the product' })
  @IsNumber()
  productId: number;
}
