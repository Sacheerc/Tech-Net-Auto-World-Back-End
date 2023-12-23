import { Column, DataType, Table, Model, ForeignKey, HasMany } from 'sequelize-typescript';
import { Employee } from './Employee';
import { Vehicle } from './Vehicle';
import { UsedInventoryItem } from './UsedInventoryItem';

//Defining Employee model
@Table({ tableName: 'service_record' })
class ServiceRecord extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column(DataType.STRING)
  public checkIn!: string;

  @Column(DataType.STRING)
  public checkOut!: string;

  @Column(DataType.STRING)
  public customerName!: string;

  @Column(DataType.STRING)
  public customerNic!: string;

  @Column(DataType.STRING)
  public customerContact!: string;

  @ForeignKey(() => Employee)
  public employeeId!: number;

  @ForeignKey(() => Vehicle)
  public vehicleNo!: string;

  @HasMany(() => UsedInventoryItem)
  usedInventoryItems!: UsedInventoryItem[]
}

export { ServiceRecord };
