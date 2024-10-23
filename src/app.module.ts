import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './modules/factory/category/entities/category.entity';
import { Product } from './modules/factory/product/entities/product.entity';
import { Customer } from './modules/factory/customer/entities/customer.entity';
import { Sale } from './modules/factory/sale/entities/sale.entity';
import { FactoryModule } from './modules/factory/factory.module';
import { RetailerModule } from './modules/retailer/retailer.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'serverbeergame.database.windows.net',
      username: 'admin98',
      password: 'Zal981117',
      database: 'BeerGamePm',
      entities: [Category, Product, Customer, Sale],
      synchronize: false,
    }), 
    FactoryModule,
    RetailerModule,

  ],
})
export class AppModule { }
