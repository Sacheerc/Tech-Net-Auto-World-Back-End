import {
  Table,
  Model,
  DataType,
  Column,
  ForeignKey,
  PrimaryKey,
} from 'sequelize-typescript';
import { Employee } from './Employee';
import { ServiceRecord } from './ServiceRecord';

//Defining JobCard model
@Table({ tableName: 'job_card' })
class JobCard extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER.UNSIGNED)
  @ForeignKey(() => Employee)
  public employeeId!: number;

  @PrimaryKey
  @Column(DataType.INTEGER.UNSIGNED)
  @ForeignKey(() => ServiceRecord)
  public serviceRecordId!: number;

  @Column(DataType.STRING)
  public workDone!: string;

  @Column(DataType.DOUBLE)
  public timeSpent!: number;
}

export { JobCard };
