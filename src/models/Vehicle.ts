import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/db';

//Defining Employee model
class Vehicle extends Model {
  public vehicleNo!: string;
  public model!: string;
  public color!: string;
  public ownerAddress!: string;
  public ownerNIC!: string;
  public ownerContact!: string;
  public ownerEmail!: string;
}

//Defining Employee schema
Vehicle.init(
  {
    vehicleNo: {
      type: DataTypes.STRING(150),
      autoIncrement: true,
      primaryKey: true,
    },
    model: {
      type: new DataTypes.STRING(150),
      allowNull: true,
    },
    color: {
      type: new DataTypes.STRING(100),
      allowNull: true,
    },
    ownerName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    ownerNIC: {
      type: new DataTypes.STRING(150),
      allowNull: false,
    },
    ownerEmail: {
      type: new DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    modelName: 'Vehicle',
    tableName: 'vehicle',
    sequelize: sequelize,
  }
);

export default { Vehicle };
