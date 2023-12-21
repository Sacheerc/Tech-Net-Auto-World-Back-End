import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/db';
import { InventoryImage } from './InventoryImage';

//Defining User model
class Inventory extends Model {
  public id!: number;
  public code!: string;
  public name!: string;
  public description!: string;
  public quantity!: string;
  public price!: string;
  public locationCode!: string;
  public countryOfOrigin!: string;
  public brand!: string;
}

//Defining User schema
Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    quantity: {
      type: new DataTypes.INTEGER.UNSIGNED(),
      allowNull: false,
    },
    price: {
      type: new DataTypes.DOUBLE(),
      allowNull: false,
    },
    locationCode: {
      type: new DataTypes.DOUBLE(),
      allowNull: false,
    },
    countryOfOorigin: {
      type: new DataTypes.DOUBLE(),
      allowNull: false,
    },
    brand: {
      type: new DataTypes.DOUBLE(),
      allowNull: false,
    },
  },
  {
    modelName: 'Inventory',
    tableName: 'inventory',
    sequelize: sequelize,
  }
);

Inventory.hasMany(InventoryImage);

export { Inventory };
