import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Role} from "../../role/entities/role.entity";
import {Permission} from "../../permission/entities/permission.entity";
import {TableLog} from "../../table-log/entities/table-log.entity";

@Table({
	tableName: 'role_permission',
	timestamps: false,
})
export class RolePermission extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ForeignKey(() => Role)
	@Column({ type: DataType.STRING, allowNull: true })
	role_id: string;

	@BelongsTo(() => Role)
	role: Role;

	@ForeignKey(() => Permission)
	@Column({ type: DataType.INTEGER, allowNull: true })
	permission_id: number;

	@BelongsTo(() => Permission)
	permission: Permission;

	@ForeignKey(() => TableLog)
	@Column({ type: DataType.STRING, allowNull: true })
	table_name: string;

	@BelongsTo(() => TableLog)
	tableLog: TableLog;
}
