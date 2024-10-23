import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [CategoryModule, CustomerModule, ProductModule, SaleModule]
})
export class FactoryModule {}
