import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSupplierOrderDto {
  @ApiProperty({ example: '2024-10-15', description: 'The date of the order' })
  @IsString()
  orderDate: string;

  @ApiProperty({ example: 'Pending', description: 'The status of the order' })
  @IsString()
  status: string;

  @ApiProperty({ example: 150.00, description: 'The total cost of the order' })
  @IsNumber()
  totalCost: number;

  @ApiProperty({ example: 1, description: 'The ID of the supplier' })
  @IsNumber()
  supplierId: number;
}
