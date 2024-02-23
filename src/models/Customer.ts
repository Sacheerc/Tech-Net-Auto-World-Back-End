import { Column, Table, Model, HasMany, DataType } from 'sequelize-typescript';
import { Vehicle } from './Vehicle';

//Defining User model
@Table({ tableName: 'customer' })
class Customer extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.STRING)
  public phone!: string;

  @Column(DataType.STRING)
  public email!: string;

  @HasMany(() => Vehicle)
  vehicles!: Vehicle[];
}

export { Customer };
