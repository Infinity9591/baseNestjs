import { Test, TestingModule } from '@nestjs/testing';
import { TableLogService } from './table-log.service';

describe('TableLogService', () => {
  let service: TableLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableLogService],
    }).compile();

    service = module.get<TableLogService>(TableLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
