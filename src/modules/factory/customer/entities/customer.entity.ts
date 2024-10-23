import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Sale } from '../../sale/entities/sale.entity';

@Entity()
export class Customer {
  @ApiProperty({ example: 1, description: 'The unique identifier of the customer' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'The name of the customer' })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({ example: '1234567890', description: 'The identification number of the customer' })
  @Column({ length: 20 })
  nit: string;

  @ApiProperty({ example: '123 Main St', description: 'The address of the customer' })
  @Column({ length: 200 })
  address: string;

  @ApiProperty({ example: '555-1234', description: 'The phone number of the customer' })
  @Column({ length: 15 })
  phone: string;

}
