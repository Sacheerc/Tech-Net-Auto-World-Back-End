import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { WorkOrder } from './WorkOrder';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

//Defining Employee model
@Table({ tableName: 'employee' })
class Employee extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column(DataType.STRING)
  public firstName!: string;

  @Column(DataType.STRING)
  public lastName!: string;

  @Column(DataType.STRING)
  public address!: string;

  @Column(DataType.STRING)
  public contact!: string;

  @Column(DataType.STRING)
  public email!: string;

  @Column(DataType.INTEGER)
  public contractId!: number;

  @Column(DataType.STRING)
  public nic!: string;

  @Column(DataType.STRING)
  public dob!: string;

  @Column(DataType.ENUM(...Object.values(Gender)))
  public gender!: Gender;

  @Column(DataType.STRING)
  public profileImage!: string;

  @HasMany(() => WorkOrder)
  workOrders!: WorkOrder[];
}

export { Employee };
