import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete, Req, Res, Put,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post('/create')
    create(@Req() request: Request, @Res() response: Response) {
        return this.roleService.create(request, response);
    }

    @Get()
    findAll(@Req() request: Request, @Res() response: Response) {
        return this.roleService.index(request, response);
    }


    @Patch('/update')
    update(@Req() request: Request, @Res() response: Response) {
        return this.roleService.update(request, response);
    }

}
