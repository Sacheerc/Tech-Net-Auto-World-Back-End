import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'tech_net',
    username: 'root',
    password: '',
    host: 'localhost',
    models: [__dirname + '/models'],
});