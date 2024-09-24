import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  // Crear un nuevo usuario
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  // Obtener todos los usuarios
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Obtener un usuario por su ID
  async findOne(id: number): Promise<User> {
    const User = await this.userRepository.findOneBy({ id });
    if (!User) {
      throw new NotFoundException(`User con ID ${id} no encontrado`);
    }
    return User;
  }

  // Actualizar un usuario por su ID
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto); // Asigna los nuevos valores al usuario existente
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id); // Verifica si el usuario existe
    await this.userRepository.remove(user);
  }
}
