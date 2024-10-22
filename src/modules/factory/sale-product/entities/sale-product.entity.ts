import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../product/entities/product.entity';
import { Sale } from '../../sale/entities/sale.entity';

@Entity()
export class SaleProduct {
  @ApiProperty({ example: 1, description: 'The unique identifier of the sale product' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 2, description: 'The quantity of the product sold' })
  @Column()
  quantity: number;

  @ApiProperty({ example: 199.99, description: 'The unit price of the product' })
  @Column('decimal')
  unitPrice: number;

  @ManyToOne(() => Sale, (sale) => sale.saleProducts)
  sale: Sale;

}
