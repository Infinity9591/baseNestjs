import { Test, TestingModule } from '@nestjs/testing';
import { TableLogController } from './table-log.controller';
import { TableLogService } from './table-log.service';

describe('TableLogController', () => {
  let controller: TableLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableLogController],
      providers: [TableLogService],
    }).compile();

    controller = module.get<TableLogController>(TableLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
