import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
	tableName: 'table_log',
	timestamps: false,
})
export class TableLog extends Model{
	@Column({
		type: DataType.STRING,
		primaryKey: true,
	})
	table_name: string;
}
