import {
  Column,
  Table,
  Model,
  HasMany,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Vehicle } from './Vehicle';
import { QuotationWork } from './QuotationWork';
import { QuotationSparePart } from './QuotationSparePart';

//Defining User model
@Table({ tableName: 'quotation' })
class Quotation extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column(DataType.DATE)
  public date!: Date;

  @Column(DataType.INTEGER)
  public duration!: number;

  @Column(DataType.DOUBLE)
  public woDiscount!: number;

  @Column(DataType.DOUBLE)
  public labourDiscount!: number;

  @ForeignKey(() => Vehicle)
  vehicleNo!: string;

  @HasMany(() => QuotationWork)
  quotationWorks!: QuotationWork[];

  @HasMany(() => QuotationSparePart)
  quotationSpareParts!: QuotationSparePart[];
}

export { Quotation };
