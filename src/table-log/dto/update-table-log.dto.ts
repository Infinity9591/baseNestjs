import { PartialType } from '@nestjs/mapped-types';
import { CreateTableLogDto } from './create-table-log.dto';

export class UpdateTableLogDto extends PartialType(CreateTableLogDto) {}
