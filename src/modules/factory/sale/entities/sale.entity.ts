import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../../customer/entities/customer.entity';
import { SaleProduct } from '../../sale-product/entities/sale-product.entity';

@Entity()
export class Sale {
  @ApiProperty({ example: 1, description: 'The unique identifier of the sale' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 199.99, description: 'The total amount of the sale' })
  @Column('decimal')
  total: number;

  @ApiProperty({ example: '2024-10-15', description: 'The date of the sale' })
  @Column({ type: 'date' })
  date: string;

  @ManyToOne(() => Customer, (customer) => customer.sales)
  customer: Customer;

  @OneToMany(() => SaleProduct, (saleProduct) => saleProduct.sale)
  saleProducts: SaleProduct[];
}
