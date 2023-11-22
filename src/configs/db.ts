import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("tech_net", 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  })

export default sequelize;