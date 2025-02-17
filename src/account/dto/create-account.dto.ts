import { Optional } from 'sequelize';
export class CreateAccountDto {
    // id : number;
    username: string;
    password: string;
    role_id?: number;

    // [key: string]: any;
}
