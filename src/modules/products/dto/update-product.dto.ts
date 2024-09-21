import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    @IsOptional()
    productName?: string;

    
    @IsOptional()
    @IsNumber()
    quantity?: number;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    storageCostPerWeek?: number;

    @IsOptional()
    @IsNumber()
    manufacturingCost?: number;

    @IsOptional()
    @IsNumber()
    ordersPerWeek?: number;
}
