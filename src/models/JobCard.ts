import { Table, Model, DataType, Column, ForeignKey } from 'sequelize-typescript';
import { Employee } from './Employee';

//Defining JobCard model
@Table({ tableName: 'job_card' })
class JobCard extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column(DataType.STRING)
  public vehicleNo!: string;

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
}

export { JobCard };
