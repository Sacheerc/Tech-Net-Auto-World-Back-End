import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Invoice } from './Invoice';
import { WorkOrder } from './WorkOrder';

enum WorkType {
  MACHINARY = 'MACHINARY',
  LABOUR = 'LABOUR',
}

//Defining User model
@Table({ tableName: 'invoice_work' })
class InvoiceWork extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column(DataType.INTEGER)
  public serialNo!: number;

  @Column(DataType.STRING)
  public description!: string;

  @Column(DataType.DOUBLE)
  public amount!: number;

  @Column(DataType.ENUM(...Object.values(WorkType)))
  public type!: WorkType;

  @ForeignKey(() => Invoice)
  invoiceId!: number;

  @HasMany(() => WorkOrder)
  workOrders!: WorkOrder[];
}

export { InvoiceWork, WorkType };
