import { Module } from '@nestjs/common';
import { SaleProductService } from './sale-product.service';
import { SaleProductController } from './sale-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleProduct } from './entities/sale-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleProduct])], // Asegúrate de que la entidad esté incluida
  controllers: [SaleProductController],
  providers: [SaleProductService],
  exports: [SaleProductService]
})
export class SaleProductModule {}
