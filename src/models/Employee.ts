import { Model, DataTypes } from 'sequelize';
import sequelize from '../configs/db';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

//Defining Employee model
class Employee extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public address!: string;
  public contact!: string;
  public email!: string;
  public contractId!: number;
  public nic!: string;
  public dob!: string;
  public gender!: Gender;
  public profileImage!: string;
}

//Defining Employee schema
Employee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(200),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(200),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    contact: {
      type: new DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(150),
      allowNull: false,
    },
    nic: {
      type: new DataTypes.STRING(150),
      allowNull: false,
    },
    dob: {
      type: new DataTypes.STRING(150),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(...Object.values(Gender)),
      allowNull: false,
    },
    profileImage: {
      type: new DataTypes.STRING(150),
      allowNull: true,
    },
  },
  {
    modelName: 'Employee',
    tableName: 'employee',
    sequelize: sequelize,
  }
);

export { Employee };
