import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableLogService } from './table-log.service';
import { CreateTableLogDto } from './dto/create-table-log.dto';
import { UpdateTableLogDto } from './dto/update-table-log.dto';

@Controller('table-log')
export class TableLogController {
  constructor(private readonly tableLogService: TableLogService) {}

  @Post()
  create(@Body() createTableLogDto: CreateTableLogDto) {
    return this.tableLogService.create(createTableLogDto);
  }

  @Get()
  findAll() {
    return this.tableLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableLogDto: UpdateTableLogDto) {
    return this.tableLogService.update(+id, updateTableLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableLogService.remove(+id);
  }
}
