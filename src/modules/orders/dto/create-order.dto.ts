import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsPositive, IsDateString, IsDecimal } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'ID del producto relacionado con la orden' })
  @IsInt()
  @IsPositive()
  product_id: number;

  @ApiProperty({ example: 5, description: 'Cantidad de productos en la orden' })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({ example: '2024-09-25', description: 'Fecha máxima de entrega' })
  @IsDateString()
  max_delivery_date: string;

  @ApiProperty({ example: 'Pendiente', description: 'Estado de la orden', enum: ['Pendiente', 'Confirmado', 'Enviado', 'Cancelado'] })
  @IsEnum(['Pendiente', 'Confirmado', 'Enviado', 'Cancelado'])
  status: 'Pendiente' | 'Confirmado' | 'Enviado' | 'Cancelado';

  @ApiProperty({ example: 100.50, description: 'Total de la orden' })
  @IsDecimal()
  total: number;
}

