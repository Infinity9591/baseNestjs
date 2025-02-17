import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'role',
    timestamps: false,
})
export class Role extends Model<Role> {
    @Column({
        type: DataType.STRING,
        primaryKey: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
}
