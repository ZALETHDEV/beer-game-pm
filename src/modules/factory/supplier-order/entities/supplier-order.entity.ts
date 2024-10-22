import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class SupplierOrder {
  @ApiProperty({ example: 1, description: 'The unique identifier of the supplier order' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '2024-10-15', description: 'The date of the order' })
  @Column({ type: 'date' })
  orderDate: string;

  @ApiProperty({ example: 'Pending', description: 'The status of the order' })
  @Column()
  status: string;

  @ApiProperty({ example: 150.00, description: 'The total cost of the order' })
  @Column('decimal')
  totalCost: number;
}
