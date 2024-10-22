import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { SupplierOrderService } from './supplier-order.service';
import { CreateSupplierOrderDto } from './dto/create-supplier-order.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Retailer')
@Controller('supplier-orders')
export class SupplierOrderController {
  constructor(private readonly supplierOrderService: SupplierOrderService) {}

  @ApiOperation({ summary: 'Get all supplier orders' })
  @ApiResponse({ status: 200, description: 'Return all supplier orders' })
  @Get()
  findAll() {
    return this.supplierOrderService.findAll();
  }

  @ApiOperation({ summary: 'Get supplier order by ID' })
  @ApiResponse({ status: 200, description: 'Return supplier order by ID' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.supplierOrderService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new supplier order' })
  @ApiResponse({ status: 201, description: 'The supplier order has been successfully created.' })
  @Post()
  create(@Body() createSupplierOrderDto: CreateSupplierOrderDto) {
    return this.supplierOrderService.create(createSupplierOrderDto);
  }

  @ApiOperation({ summary: 'Update a supplier order' })
  @ApiResponse({ status: 200, description: 'The supplier order has been successfully updated.' })
  @Put(':id')
  update(@Param('id') id: number, @Body() createSupplierOrderDto: CreateSupplierOrderDto) {
    return this.supplierOrderService.update(id, createSupplierOrderDto);
  }

  @ApiOperation({ summary: 'Delete a supplier order' })
  @ApiResponse({ status: 200, description: 'The supplier order has been successfully deleted.' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.supplierOrderService.delete(id);
  }
}
