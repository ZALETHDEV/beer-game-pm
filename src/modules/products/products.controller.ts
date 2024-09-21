import { Body, Controller, Delete, Get, Post, Param, Patch, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
//import { Response } from 'express';

@Controller('products')
export class ProductsController {

    constructor(private productsServices: ProductsService) { }

    @Get()
    @HttpCode(200)
    getAllProducts() {
        return this.productsServices.getAllProducts();

    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productsServices.getProductById(id);
    }

    @Post()
    @HttpCode(201)
    createProduct(@Body() newProduct: CreateProductDto) {
        return this.productsServices.createProduct(newProduct.productName, newProduct.quantity, newProduct.price, newProduct.storageCostPerWeek, newProduct.manufacturingCost, newProduct.ordersPerWeek);
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string, @Body() updatedFields: UpdateProductDto) {
        return this.productsServices.updateProduct(id, updatedFields)
    }

    @Delete(':id')
    @HttpCode(200)
    deleteProduct(@Param('id') id: string): Promise<{ statusCode: number, message: string }> {
        return this.productsServices.deleteProduct(id)
    }


}


