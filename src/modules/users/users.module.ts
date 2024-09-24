import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserType } from '../users_types/entities/users_type.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, UserType])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
