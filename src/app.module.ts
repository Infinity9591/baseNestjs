import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//model
import { Account } from './module/account/entities/account.entity';
import { Role } from './module/role/entities/role.entity';
import { Permission } from './module/permission/entities/permission.entity';
import { User } from './module/user/entities/user.entity';
import { RolePermission } from './module/role-permission/entities/role-permission.entity';
import { TableLog } from './module/table-log/entities/table-log.entity';
//module
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountModule } from './module/account/account.module';
import { RoleModule } from './module/role/role.module';
import { ConfigModule } from '@nestjs/config';
import { PermissionModule } from './module/permission/permission.module';
import { RolePermissionModule } from './module/role-permission/role-permission.module';
import { SiteModule } from './module/site/site.module';
import { TableLogModule } from './module/table-log/table-log.module';
import { UserModule } from './module/user/user.module';

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
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
