import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/db';
import { Inventory } from './Inventory';

//Defining Employee model
class InventoryImage extends Model {
  public inventoryId!: number;
  public imageUrl!: string;
}

//Defining Employee schema
InventoryImage.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  {
    modelName: 'InventoryImage',
    tableName: 'inventory_image',
    sequelize: sequelize,
  }
);

InventoryImage.belongsTo(Inventory);

export { InventoryImage };
