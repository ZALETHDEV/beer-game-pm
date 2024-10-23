import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Product {
  @ApiProperty({ example: 1, description: 'The unique identifier of the product' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Laptop', description: 'The name of the product' })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({ example: 999.99, description: 'The price of the product' })
  @Column('decimal')
  price: number;

  @ApiProperty({ example: 'A high-performance laptop', description: 'A brief description of the product' })
  @Column('text')
  description: string;

}
