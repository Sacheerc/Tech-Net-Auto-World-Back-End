import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/db';

//Defining Employee model
class ServiceRecord extends Model {
  public id!: number;
  public vehicleNo!: string;
  public checkIn!: string;
  public checkOut!: string;
  public customerName!: string;
  public customerNic!: string;
  public customerContact!: string;
  public employeeId!: number;
}

//Defining Employee schema
ServiceRecord.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    vehicleNo: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    checkIn: {
      type: new DataTypes.STRING(150),
      allowNull: false,
    },
    checkOut: {
      type: new DataTypes.STRING(150),
      allowNull: false,
    },
    customerName: {
      type: new DataTypes.STRING(200),
      allowNull: false,
    },
    customerNic: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    customerContact: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    employeeId: {
      type: new DataTypes.NUMBER(),
      allowNull: false,
    },
  },
  {
    modelName: 'ServiceRecord',
    tableName: 'service_record',
    sequelize: sequelize,
  }
);

export { ServiceRecord };
