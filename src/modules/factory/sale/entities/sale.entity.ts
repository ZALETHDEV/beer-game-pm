import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


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
}
