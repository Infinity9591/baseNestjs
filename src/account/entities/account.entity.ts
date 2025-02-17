import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { Role } from '../../role/entities/role.entity';

@Table({
    tableName: 'account',
    timestamps: false,
})
export class Account extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    username: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password_hash: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    is_active: number;

    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER, allowNull: true })
    role_id: string;

    @BelongsTo(() => Role)
    role: Role;
}
