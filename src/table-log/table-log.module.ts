import { Module } from '@nestjs/common';
import { TableLogService } from './table-log.service';
import { TableLogController } from './table-log.controller';

@Module({
  controllers: [TableLogController],
  providers: [TableLogService],
})
export class TableLogModule {}
