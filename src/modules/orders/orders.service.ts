import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) { }

  // Crear un nuevo pedido 
  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.ordersRepository.create(createOrderDto);
    return this.ordersRepository.save(order);
  }

  // Obtener todos los pedido
  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  // Obtener un pedidp por su ID
  async findOne(id: number): Promise<Order> {
    const order = await this.ordersRepository.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }
    return order;
  }

  // Actualizar un pedido por su ID
  async update(id: number, UpdateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.findOne(id);
    Object.assign(order, UpdateOrderDto); // Asigna los nuevos valores al pedido existente
    return this.ordersRepository.save(order);
  }

  // Eliminar un pedido por su ID
  async remove(id: number): Promise<void> {
    const order = await this.findOne(id); // Verifica si el pedido existe
    await this.ordersRepository.remove(order);
  }
}
