import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//model
import { Account } from './account/entities/account.entity';
import { Role } from './role/entities/role.entity';
import {Permission} from "./permission/entities/permission.entity";
import {User} from './user/entities/user.entity'
import {RolePermission} from './role-permission/entities/role-permission.entity'
import {TableLog} from './table-log/entities/table-log.entity'
//module
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountModule } from './account/account.module';
import { RoleModule } from './role/role.module';
import { ConfigModule } from '@nestjs/config';
import { PermissionModule } from './permission/permission.module';
import { RolePermissionModule } from './role-permission/role-permission.module';
import { SiteModule } from './site/site.module';
import { TableLogModule } from './table-log/table-log.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3308,
            username: 'root',
            password: '',
            database: 'basenestjs',
            models: [Account, Role, Permission],
        }),
        AccountModule,
        RoleModule,
        PermissionModule,
        RolePermissionModule,
        SiteModule,
        TableLogModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
