import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { SaleProductService } from './sale-product.service';
import { CreateSaleProductDto } from './dto/create-sale-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Retailer')
@Controller('sale-products')
export class SaleProductController {
  constructor(private readonly saleProductService: SaleProductService) {}

  @ApiOperation({ summary: 'Get all sale products' })
  @ApiResponse({ status: 200, description: 'Return all sale products' })
  @Get()
  findAll() {
    return this.saleProductService.findAll();
  }

  @ApiOperation({ summary: 'Get sale product by ID' })
  @ApiResponse({ status: 200, description: 'Return sale product by ID' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.saleProductService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new sale product' })
  @ApiResponse({ status: 201, description: 'The sale product has been successfully created.' })
  @Post()
  create(@Body() createSaleProductDto: CreateSaleProductDto) {
    return this.saleProductService.create(createSaleProductDto);
  }

  @ApiOperation({ summary: 'Update a sale product' })
  @ApiResponse({ status: 200, description: 'The sale product has been successfully updated.' })
  @Put(':id')
  update(@Param('id') id: number, @Body() createSaleProductDto: CreateSaleProductDto) {
    return this.saleProductService.update(id, createSaleProductDto);
  }

  @ApiOperation({ summary: 'Delete a sale product' })
  @ApiResponse({ status: 200, description: 'The sale product has been successfully deleted.' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.saleProductService.delete(id);
  }
}
