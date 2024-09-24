import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  // Crear un nuevo producto
  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  // Obtener todos los productos
  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  // Obtener un producto por su ID
  async findOne(id: number): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return product;
  }

  // Actualizar un producto por su ID
  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDto); // Asigna los nuevos valores al producto existente
    return this.productsRepository.save(product);
  }

  // Eliminar un producto por su ID
  async remove(id: number): Promise<void> {
    const product = await this.findOne(id); // Verifica si el producto existe
    await this.productsRepository.remove(product);
  }
}
