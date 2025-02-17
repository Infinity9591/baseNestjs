import {HttpStatus, Injectable} from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Permission} from "./entities/permission.entity";

@Injectable()
export class PermissionService {
    constructor(
        @InjectModel(Permission)
        private permissionModel: typeof Permission,
    ) {}

    index(req, res) {
        try {
            return this.permissionModel.findAll().then((permissions)=> {
                res.status(HttpStatus.OK).json(permissions)
            })
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: e,
            });
        }
    }
}
