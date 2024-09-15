import { Injectable } from '@nestjs/common';
import { CreateUsersTypeDto } from './dto/create-users_type.dto';
import { UpdateUsersTypeDto } from './dto/update-users_type.dto';

@Injectable()
export class UsersTypesService {
  create(createUsersTypeDto: CreateUsersTypeDto) {
    return 'This action adds a new usersType';
  }

  findAll() {
    return `This action returns all usersTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersType`;
  }

  update(id: number, updateUsersTypeDto: UpdateUsersTypeDto) {
    return `This action updates a #${id} usersType`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersType`;
  }
}
