import { Column, DataType, Table, Model, ForeignKey } from 'sequelize-typescript';
import { Inventory } from './Inventory';

//Defining Employee model
@Table({ tableName: 'inventory_image' })
class InventoryImage extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({
    type: DataType.STRING
  })
  public imageUrl!: string;

  @ForeignKey(() => Inventory)
  public inventoryId!: number;
}

export { InventoryImage };
