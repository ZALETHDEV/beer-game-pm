import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../product/entities/product.entity';

@Entity('factory.category')
export class Category {
  @ApiProperty({ example: 1, description: 'The unique identifier of the category' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Box', description: 'The name of the category' })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({ example: 'Box', description: 'The type of the category' })
  @Column({ length: 100 })
  type: string;

}
