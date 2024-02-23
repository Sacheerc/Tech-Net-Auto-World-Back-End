import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Vehicle } from './Vehicle';
import { Quotation } from './Quotation';

enum WorkType {
  MACHINARY = 'MACHINARY',
  LABOUR = 'LABOUR',
}

//Defining User model
@Table({ tableName: 'quotation_work' })
class QuotationWork extends Model {
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

  @ForeignKey(() => Quotation)
  quotationId!: number;
}

export { QuotationWork, WorkType };
