import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete, Req, Res,
} from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Controller('permission')
export class PermissionController {
    constructor(private readonly permissionService: PermissionService) {}

    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        return this.permissionService.index(request, response);
    }

}
