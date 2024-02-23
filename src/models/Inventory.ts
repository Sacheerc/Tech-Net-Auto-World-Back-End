import { Column, Table, Model, DataType, HasMany } from 'sequelize-typescript';
import { InventoryImage } from './InventoryImage';
import { QuotationSparePart } from './QuotationSparePart';
import { InvoiceSparePart } from './InvoiceSparePart';

//Defining User model
@Table({ tableName: 'inventory' })
class Inventory extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  public id!: number;

  @Column(DataType.STRING)
  public code!: string;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.STRING)
  public description!: string;

  @Column(DataType.INTEGER.UNSIGNED)
  public quantity!: number;

  @Column(DataType.DOUBLE)
  public price!: number;

  @Column(DataType.DOUBLE)
  public holded!: number;

  @Column(DataType.STRING)
  public locationCode!: string;

  @Column(DataType.STRING)
  public countryOfOrigin!: string;

  @Column(DataType.STRING)
  public brand!: string;

  @HasMany(() => InventoryImage)
  images!: InventoryImage[];

  @HasMany(() => QuotationSparePart)
  quotationSpareParts!: QuotationSparePart[];

  @HasMany(() => InvoiceSparePart)
  invoiceSpareParts!: InvoiceSparePart[];
}

export { Inventory };
