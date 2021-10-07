import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

import { User } from "src/users/users.model";

@Table({ tableName: "user_
roles" })
export class Role extends Model<UserRoles> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
      
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "ADMIN",
    description: "значение роли пользователя",
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({
    example: "самый главный",
    description: "описание роли пользователя",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
