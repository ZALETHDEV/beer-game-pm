import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @ApiProperty({ example: 1, description: 'ID del producto' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 19.99, description: 'Precio del producto' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @ApiProperty({ example: 'Cerveza artesanal', description: 'Nombre del producto' })
  @Column({ length: 255 })
  productName: string;

  @ApiProperty({ example: 50, description: 'Cantidad en stock del producto' })
  @Column({ type: 'int' })
  quantity: number;

  @ApiProperty({ example: 5, description: 'Costo de almacenamiento por semana' })
  @Column({ type: 'int' })
  storageCostPerWeek: number;

  @ApiProperty({ example: 10, description: 'Costo de fabricación del producto' })
  @Column({ type: 'int' })
  manufacturingCost: number;

  @ApiProperty({ example: 100, description: 'Órdenes por semana' })
  @Column({ type: 'int' })
  ordersPerWeek: number;

}
