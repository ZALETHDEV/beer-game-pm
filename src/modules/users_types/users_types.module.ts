import { Module } from '@nestjs/common';
import { UsersTypesService } from './users_types.service';
import { UserTypeController } from './users_types.controller';
import { UserType } from './entities/users_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserType, User])],
  controllers: [UserTypeController],
  providers: [UsersTypesService],
})
export class UsersTypesModule {}
