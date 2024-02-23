import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Inventory } from './Inventory';
import { Invoice } from './Invoice';

@Table({ tableName: 'invoice_spare_part' })
class InvoiceSparePart extends Model {
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
  public itemPrice!: number;

  @Column(DataType.DOUBLE)
  public totalPrice!: number;

  @Column(DataType.INTEGER)
  public quantity!: number;

  @ForeignKey(() => Invoice)
  invoiceId!: number;

  @ForeignKey(() => Inventory)
  inventoryId!: number;
}

export { InvoiceSparePart };
