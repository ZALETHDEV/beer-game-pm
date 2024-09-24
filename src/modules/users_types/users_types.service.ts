import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserTypeDto } from './dto/create-users_type.dto';
import { UpdateUserTypeDto } from './dto/update-users_type.dto';
import { UserType } from './entities/users_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersTypesService {
  constructor(
    @InjectRepository(UserType)
    private readonly userTypeRepository: Repository<UserType>,
  ) { }

  // Crear un nuevo usuario
  create(createUserTypeDto: CreateUserTypeDto): Promise<UserType> {
    const user = this.userTypeRepository.create(createUserTypeDto);
    return this.userTypeRepository.save(user);
  }

  // Obtener todos los usuarios
  findAll(): Promise<UserType[]> {
    return this.userTypeRepository.find();
  }

  // Obtener un usuario por su ID
  async findOne(id: number): Promise<UserType> {
    const User = await this.userTypeRepository.findOneBy({ id });
    if (!User) {
      throw new NotFoundException(`User con ID ${id} no encontrado`);
    }
    return User;
  }

  // Actualizar un usuario por su ID
  async update(id: number, updateUserTypeDto: UpdateUserTypeDto): Promise<UserType> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserTypeDto); // Asigna los nuevos valores al usuario existente
    return this.userTypeRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id); // Verifica si el usuario existe
    await this.userTypeRepository.remove(user);
  }
}


