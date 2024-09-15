import { Module } from '@nestjs/common';
import { UsersTypesService } from './users_types.service';
import { UsersTypesController } from './users_types.controller';

@Module({
  controllers: [UsersTypesController],
  providers: [UsersTypesService],
})
export class UsersTypesModule {}
