import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]),
    DatabaseModule],
  providers: [ProductsService],
  exports: [TypeOrmModule, ProductsService],
  controllers: [ProductsController],
  
})
export class ProductsModule {}

