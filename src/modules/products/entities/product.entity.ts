import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    productName : string;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    storageCostPerWeek: number;

    @Column()
    manufacturingCost: number;
    
    @Column()
    ordersPerWeek: number
}
