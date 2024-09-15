import { Test, TestingModule } from '@nestjs/testing';
import { UsersTypesController } from './users_types.controller';
import { UsersTypesService } from './users_types.service';

describe('UsersTypesController', () => {
  let controller: UsersTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersTypesController],
      providers: [UsersTypesService],
    }).compile();

    controller = module.get<UsersTypesController>(UsersTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
