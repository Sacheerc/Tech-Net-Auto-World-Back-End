import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/db';

//Defining Employee model
class UsedInventoryItem extends Model {
  public serviceRecordId!: number;
  public inventoryId!: number;
  public quantity!: number;
  public itemPrice!: number;
  public totalPrice!: number;
}

//Defining Employee schema
UsedInventoryItem.init(
  {
    serviceRecordId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    inventoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    itemPrice: {
      type: new DataTypes.DOUBLE(),
      allowNull: false,
    },
    totalPrice: {
      type: new DataTypes.DOUBLE(),
      allowNull: false,
    },
  },
  {
    modelName: 'UsedInventoryItem',
    tableName: 'used_inventory_item',
    sequelize: sequelize,
  }
);

export { UsedInventoryItem };
