import { Sequelize } from 'sequelize-typescript';
import path from 'path'

//Initiate Sequelize library
const sequelize = new Sequelize('tech_net', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  models: [path.join(__dirname, '../models')]
});

export default sequelize;
