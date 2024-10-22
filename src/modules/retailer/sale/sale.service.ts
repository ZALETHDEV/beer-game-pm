import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Sale } from './entities/sale.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ) {}

  findAll(): Promise<Sale[]> {
    return this.saleRepository.find({ relations: ['customer', 'saleProducts'] });
  }

  findOne(id: number): Promise<Sale> {
    return this.saleRepository.findOne({ where: { id }, relations: ['customer', 'saleProducts'] });
  }

  create(createSaleDto: CreateSaleDto): Promise<Sale> {
    const sale = this.saleRepository.create(createSaleDto);
    return this.saleRepository.save(sale);
  }

  async update(id: number, updateSaleDto: CreateSaleDto): Promise<Sale> {
    await this.saleRepository.update(id, updateSaleDto);
    return this.saleRepository.findOne({ where: { id }, relations: ['customer', 'saleProducts'] });
  }

  async delete(id: number): Promise<void> {
    await this.saleRepository.delete(id);
  }
}
