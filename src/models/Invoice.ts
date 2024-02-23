import {
  Column,
  Table,
  Model,
  HasMany,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Vehicle } from './Vehicle';
import { Quotation } from './Quotation';
import { InvoiceWork } from './InvoiceWork';
import { InvoiceSparePart } from './InvoiceSparePart';

//Defining User model
@Table({ tableName: 'invoice' })
class Invoice extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column(DataType.DATE)
  public date!: Date;

  @Column(DataType.DATE)
  public checkIn!: Date;

  @Column(DataType.DATE)
  public checkOut!: Date;

  @Column(DataType.INTEGER)
  public duration!: number;

  @Column(DataType.DOUBLE)
  public woDiscount!: number;

  @Column(DataType.DOUBLE)
  public labourDiscount!: number;

  @ForeignKey(() => Vehicle)
  vehicleNo!: string;

  @ForeignKey(() => Quotation)
  quotationNo!: number;

  @HasMany(() => InvoiceWork)
  invoiceWorks!: InvoiceWork[];

  @HasMany(() => InvoiceSparePart)
  invoiceSpareParts!: InvoiceSparePart[];
}

export { Invoice };
