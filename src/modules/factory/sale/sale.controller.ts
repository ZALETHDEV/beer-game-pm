import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Factory')
@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @ApiOperation({ summary: 'Get all sales' })
  @ApiResponse({ status: 200, description: 'Return all sales' })
  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @ApiOperation({ summary: 'Get sale by ID' })
  @ApiResponse({ status: 200, description: 'Return sale by ID' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.saleService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new sale' })
  @ApiResponse({ status: 201, description: 'The sale has been successfully created.' })
  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @ApiOperation({ summary: 'Update a sale' })
  @ApiResponse({ status: 200, description: 'The sale has been successfully updated.' })
  @Put(':id')
  update(@Param('id') id: number, @Body() createSaleDto: CreateSaleDto) {
    return this.saleService.update(id, createSaleDto);
  }

  @ApiOperation({ summary: 'Delete a sale' })
  @ApiResponse({ status: 200, description: 'The sale has been successfully deleted.' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.saleService.delete(id);
  }
}
