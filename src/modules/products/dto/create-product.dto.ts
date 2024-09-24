import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 19.99, description: 'Precio del producto' })
  @IsDecimal()
  price: number;

  @ApiProperty({ example: 'Cerveza artesanal', description: 'Nombre del producto' })
  @IsNotEmpty()
  productName: string;

  @ApiProperty({ example: 50, description: 'Cantidad en stock del producto' })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({ example: 5, description: 'Costo de almacenamiento por semana' })
  @IsInt()
  @IsPositive()
  storageCostPerWeek: number;

  @ApiProperty({ example: 10, description: 'Costo de fabricación del producto' })
  @IsInt()
  @IsPositive()
  manufacturingCost: number;

  @ApiProperty({ example: 100, description: 'Órdenes por semana' })
  @IsInt()
  @IsPositive()
  ordersPerWeek: number;
}
