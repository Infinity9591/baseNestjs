import { Injectable } from '@nestjs/common';
import { CreateTableLogDto } from './dto/create-table-log.dto';
import { UpdateTableLogDto } from './dto/update-table-log.dto';

@Injectable()
export class TableLogService {
  create(createTableLogDto: CreateTableLogDto) {
    return 'This action adds a new tableLog';
  }

  findAll() {
    return `This action returns all tableLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tableLog`;
  }

  update(id: number, updateTableLogDto: UpdateTableLogDto) {
    return `This action updates a #${id} tableLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} tableLog`;
  }
}
