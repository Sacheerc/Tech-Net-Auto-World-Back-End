import { Column, Table, Model, HasMany, DataType } from 'sequelize-typescript';

enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

//Defining User model
@Table({ tableName: 'user' })
class User extends Model {

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column(DataType.STRING)
  public username!: string;

  @Column(DataType.STRING)
  public password!: string;

  @Column(DataType.ENUM(...Object.values(UserRole)))
  public role!: UserRole;

  @Column(DataType.STRING)
  public email!: string;
}

export { User, UserRole };
