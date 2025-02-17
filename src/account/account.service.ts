import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from './entities/account.entity';
import { Sequelize } from 'sequelize-typescript';
import { Role } from '../role/entities/role.entity';
import * as bcrypt from 'bcrypt';

import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AccountService {
    constructor(
        @InjectModel(Account)
        private accountModel: typeof Account,
    ) {}

    index(req, res) {
        try {
            return this.accountModel.findAll().then((accounts)=> {
                res.status(HttpStatus.OK).json(accounts)
            })
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: e,
            });
        }
    }

    async create(req, res): Promise<Account> {
        try {
            if (req.body.username === '' || req.body.password === '') {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    message: 'Username or Password must not be null',
                });
            }

            const existsUsername = await this.accountModel.findOne({
                where: { username: req.body.username },
            });
            if (existsUsername) {
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: 'Username already exists',
                });
            } else {
                bcrypt
                    .hash(req.body.password, parseInt(process.env.COST_FACTOR))
                    .then((hash) => {
                        this.accountModel.create({
                            username: req.body.username,
                            password_hash: hash,
                            role_id: req?.body?.role_id,
                            is_active: 1,
                        });
                    })
                    .then(() => {
                        res.status(HttpStatus.OK).json({
                            statusCreate: 'Success',
                        });
                    });
            }
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error',
            });
        }
    }

    deactive(req, res) {
        try {
            this.accountModel
                .findOne({ where: { id: req.body.id } })
                .then((account) => {
                    if (account.is_active === 1)
                        account.update({
                            is_active: 0,
                        });
                })
                .then(() => {
                    res.status(HttpStatus.OK).json({
                        status: 'Success',
                    });
                });
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error',
            });
        }
    }

    active(req, res) {
        try {
            this.accountModel
                .findOne({ where: { id: req.body.id } })
                .then((account) => {
                    if (account.is_active === 0)
                        account.update({
                            is_active: 1,
                        });
                })
                .then(() => {
                    res.status(HttpStatus.OK).json({
                        status: 'Success',
                    });
                });
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error',
            });
        }
    }

    editRole(req, res) {
        try {
            this.accountModel
                .findOne({ where: { id: req.body.id } })
                .then((account) => {
                    account.update({
                        role_id: req.body.role_id,
                    });
                })
                .then(() => {
                    return res.status(HttpStatus.OK).json({
                        status: 'Success',
                    });
                });
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error',
            });
        }
    }

    // findOne(id: number) {
    //     return `This action returns a #${id} account`;
    // }
    //
    // update(id: number, updateAccountDto: UpdateAccountDto) {
    //     return `This action updates a #${id} account`;
    // }
    //
    // remove(id: number) {
    //     return `This action removes a #${id} account`;
    // }
}
