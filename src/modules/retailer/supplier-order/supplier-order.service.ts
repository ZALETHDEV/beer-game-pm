import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierOrderDto } from './dto/create-supplier-order.dto';
import { SupplierOrder } from './entities/supplier-order.entity';

@Injectable()
export class SupplierOrderService {
  constructor(
    @InjectRepository(SupplierOrder)
    private supplierOrderRepository: Repository<SupplierOrder>,
  ) {}

  findAll(): Promise<SupplierOrder[]> {
    return this.supplierOrderRepository.find({ relations: ['supplier'] });
  }

  findOne(id: number): Promise<SupplierOrder> {
    return this.supplierOrderRepository.findOne({ where: { id }, relations: ['supplier'] });
  }

  create(createSupplierOrderDto: CreateSupplierOrderDto): Promise<SupplierOrder> {
    const supplierOrder = this.supplierOrderRepository.create(createSupplierOrderDto);
    return this.supplierOrderRepository.save(supplierOrder);
  }

  async update(id: number, updateSupplierOrderDto: CreateSupplierOrderDto): Promise<SupplierOrder> {
    await this.supplierOrderRepository.update(id, updateSupplierOrderDto);
    return this.supplierOrderRepository.findOne({ where: { id }, relations: ['supplier'] });
  }

  async delete(id: number): Promise<void> {
    await this.supplierOrderRepository.delete(id);
  }
}
