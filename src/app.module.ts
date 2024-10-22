import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './modules/factory/category/entities/category.entity';
import { Product } from './modules/factory/product/entities/product.entity';
import { Customer } from './modules/factory/customer/entities/customer.entity';
import { Sale } from './modules/factory/sale/entities/sale.entity';
import { SaleProduct } from './modules/factory/sale-product/entities/sale-product.entity';
import { SupplierOrder } from './modules/factory/supplier-order/entities/supplier-order.entity';
import { CategoryModule } from './modules/factory/category/category.module';
import { CustomerModule } from './modules/factory/customer/customer.module';
import { ProductModule } from './modules/factory/product/product.module';
import { SaleModule } from './modules/factory/sale/sale.module';
import { SaleProductModule } from './modules/factory/sale-product/sale-product.module';
import { SupplierOrderModule } from './modules/factory/supplier-order/supplier-order.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'serverbeergame.database.windows.net',
      username: 'admin98',
      password: 'Zal981117',
      database: 'BeerGamePm',
      entities: [Category, Product, Customer, Sale, SaleProduct, SupplierOrder],
      synchronize: false,
    }), CategoryModule, CustomerModule, ProductModule, SaleModule, SaleProductModule, SupplierOrderModule],
})
export class AppModule { }
