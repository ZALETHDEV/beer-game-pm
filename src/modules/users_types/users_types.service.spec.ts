import { Test, TestingModule } from '@nestjs/testing';
import { UsersTypesService } from './users_types.service';

describe('UsersTypesService', () => {
  let service: UsersTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersTypesService],
    }).compile();

    service = module.get<UsersTypesService>(UsersTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
