import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Factory')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: 'Get all customers' })
  @ApiResponse({ status: 200, description: 'Return all customers' })
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: 'Get customer by ID' })
  @ApiResponse({ status: 200, description: 'Return customer by ID' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({ status: 201, description: 'The customer has been successfully created.' })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation({ summary: 'Update a customer' })
  @ApiResponse({ status: 200, description: 'The customer has been successfully updated.' })
  @Put(':id')
  update(@Param('id') id: number, @Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.update(id, createCustomerDto);
  }

  @ApiOperation({ summary: 'Delete a customer' })
  @ApiResponse({ status: 200, description: 'The customer has been successfully deleted.' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.customerService.delete(id);
  }
}
