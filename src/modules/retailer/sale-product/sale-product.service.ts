import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaleProductDto } from './dto/create-sale-product.dto';
import { SaleProduct } from './entities/sale-product.entity';

@Injectable()
export class SaleProductService {
  constructor(
    @InjectRepository(SaleProduct)
    private saleProductRepository: Repository<SaleProduct>,
  ) {}

  findAll(): Promise<SaleProduct[]> {
    return this.saleProductRepository.find({ relations: ['sale', 'product'] });
  }

  findOne(id: number): Promise<SaleProduct> {
    return this.saleProductRepository.findOne({ where: { id }, relations: ['sale', 'product'] });
  }

  create(createSaleProductDto: CreateSaleProductDto): Promise<SaleProduct> {
    const saleProduct = this.saleProductRepository.create(createSaleProductDto);
    return this.saleProductRepository.save(saleProduct);
  }

  async update(id: number, updateSaleProductDto: CreateSaleProductDto): Promise<SaleProduct> {
    await this.saleProductRepository.update(id, updateSaleProductDto);
    return this.saleProductRepository.findOne({ where: { id }, relations: ['sale', 'product'] });
  }

  async delete(id: number): Promise<void> {
    await this.saleProductRepository.delete(id);
  }
}
