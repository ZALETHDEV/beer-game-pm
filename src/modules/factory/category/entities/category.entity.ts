import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../product/entities/product.entity';

@Entity('factory.category')
export class Category {
  @ApiProperty({ example: 1, description: 'The unique identifier of the category' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Electronics', description: 'The name of the category' })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({ example: 'Devices', description: 'The type of the category' })
  @Column({ length: 100 })
  type: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
