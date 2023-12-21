import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/db';

//Defining Employee model
class JobCard extends Model {
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
JobCard.init(
  {
    employeeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    ServiceRecordId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    workDescription: {
      type: new DataTypes.STRING(200),
      allowNull: false,
    },
    timeSpent: {
      type: new DataTypes.NUMBER(),
      allowNull: false,
    },
  },
  {
    modelName: 'JobCard',
    tableName: 'job_card',
    sequelize: sequelize,
  }
);

export { JobCard };
