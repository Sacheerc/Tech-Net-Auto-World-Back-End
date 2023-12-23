import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Inventory } from './Inventory';
import { ServiceRecord } from './ServiceRecord';

//Defining UsedInventoryItem model
@Table({ tableName: 'used_inventory_item' })
class UsedInventoryItem extends Model {

  @PrimaryKey
  @Column(DataType.INTEGER.UNSIGNED)
  @ForeignKey(() => ServiceRecord)
  public serviceRecordId!: number;

  @PrimaryKey
  @Column(DataType.INTEGER.UNSIGNED)
  @ForeignKey(() => Inventory)
  public inventoryId!: number;

  @Column(DataType.INTEGER)
  public quantity!: number;

  @Column(DataType.DOUBLE)
  public itemPrice!: number;

  @Column(DataType.DOUBLE)
  public totalPrice!: number;
}

export { UsedInventoryItem };
