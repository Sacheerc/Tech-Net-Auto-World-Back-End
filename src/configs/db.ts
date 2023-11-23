import { Sequelize } from 'sequelize';

//Initiate Sequekize library
const sequelize = new Sequelize('tech_net', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
