import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Role} from "../../role/entities/role.entity";
import {Account} from "../../account/entities/account.entity";

@Table({
	tableName: 'user',
	timestamps: false,
})
export class User extends Model{
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@Column({ type: DataType.STRING, allowNull: false })
	name: string;

	@Column({ type: DataType.STRING, allowNull: false })
	phone_number: string;

	@Column({ type: DataType.STRING, allowNull: false })
	email: string;

	@Column({ type: DataType.STRING, allowNull: false })
	address: string;

	@ForeignKey(() => Account)
	@Column({ type: DataType.INTEGER, allowNull: false })
	account_id: number;

	@BelongsTo(() => Account)
	account: Account;
}
