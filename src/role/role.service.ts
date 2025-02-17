import {HttpStatus, Injectable} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Permission} from "../permission/entities/permission.entity";
import {Role} from "./entities/role.entity";

@Injectable()
export class RoleService {

    constructor(
        @InjectModel(Role)
        private roleModel: typeof Role,
    ) {}


    async create(req, res) {
        try {
            await this.roleModel.create({
                id: req.body.id,
                name: req.body.name
            })
            res.status(HttpStatus.OK).json({ statusCreate: 'Success' })
        } catch (e) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: e,
            });
        }
    }

    index(req, res) {
        try {
            return this.roleModel.findAll().then((roles)=> {
                res.status(HttpStatus.OK).json(roles)
            })
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: e,
            });
        }
    }

    async update(req, res) {
        try {
            await this.roleModel.findByPk(req.body.id).then(role => {
                role.update({
                    name: req.body.name,
                })
            });
            res.status(HttpStatus.OK).json({status : "Success"})

        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: e,
            });
        }
    }

}
