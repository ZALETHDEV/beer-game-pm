import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('orders')
export class Order {
  @ApiProperty({ example: 1, description: 'ID de la orden' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 1, description: 'ID del producto relacionado con la orden' })
  @Column({ type: 'int', nullable: true })
  product_id: number;

  @ApiProperty({ example: 5, description: 'Cantidad de productos en la orden' })
  @Column({ type: 'int' })
  quantity: number;

  @ApiProperty({ example: '2024-09-25', description: 'Fecha máxima de entrega' })
  @Column({ type: 'date' })
  max_delivery_date: string;

  @ApiProperty({ example: 'Pendiente', description: 'Estado de la orden', enum: ['Pendiente', 'Confirmado', 'Enviado', 'Cancelado'] })
  @Column({ type: 'enum', enum: ['Pendiente', 'Confirmado', 'Enviado', 'Cancelado'], default: 'Pendiente' })
  status: string;

  @ApiProperty({ example: 100.50, description: 'Total de la orden' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

}
