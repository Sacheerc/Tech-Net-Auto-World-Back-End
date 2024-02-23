import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Quotation } from './Quotation';
import { Inventory } from './Inventory';

@Table({ tableName: 'quotation_spare_part' })
class QuotationSparePart extends Model {
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

  @ForeignKey(() => Quotation)
  quotationId!: number;

  @ForeignKey(() => Inventory)
  inventoryId!: number;
}

export { QuotationSparePart };
