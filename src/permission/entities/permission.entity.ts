import {Column, DataType, Model, Table} from 'sequelize-typescript';

@Table({
    tableName: 'permission',
    timestamps: false,
})
export class Permission extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    action_name: string;
}
