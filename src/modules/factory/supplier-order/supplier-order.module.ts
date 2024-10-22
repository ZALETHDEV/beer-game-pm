import { Module } from '@nestjs/common';
import { SupplierOrderService } from './supplier-order.service';
import { SupplierOrderController } from './supplier-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierOrder } from './entities/supplier-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupplierOrder])], // Asegúrate de que la entidad esté incluida
  controllers: [SupplierOrderController],
  providers: [SupplierOrderService],
  exports: [SupplierOrderService]
})
export class SupplierOrderModule {}
