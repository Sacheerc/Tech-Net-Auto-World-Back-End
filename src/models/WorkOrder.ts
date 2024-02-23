import {
  Table,
  Model,
  DataType,
  Column,
  ForeignKey,
  PrimaryKey,
} from 'sequelize-typescript';
import { Employee } from './Employee';
import { InvoiceWork } from './InvoiceWork';

//Defining JobCard model
@Table({ tableName: 'work_order' })
class WorkOrder extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER.UNSIGNED)
  @ForeignKey(() => Employee)
  public employeeId!: number;

  @PrimaryKey
  @Column(DataType.INTEGER.UNSIGNED)
  @ForeignKey(() => InvoiceWork)
  public invoiceWorkId!: number;

  @Column(DataType.STRING)
  public workDone!: string;

  @Column(DataType.DOUBLE)
  public timeSpent!: number;
}

export { WorkOrder };
