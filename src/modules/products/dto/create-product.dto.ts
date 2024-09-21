import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    storageCostPerWeek: number;

    @IsNotEmpty()
    @IsNumber()
    manufacturingCost: number;

    @IsNotEmpty()
    @IsNumber()
    ordersPerWeek: number;
}

