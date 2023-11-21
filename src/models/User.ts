// src/models/User.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../configs/db';

enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
    public role!: UserRole;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(...Object.values(UserRole)),
            allowNull: false,
            defaultValue: UserRole.USER,
        },
    },
    {
        tableName: 'users',
        sequelize: sequelize,
    }
);

export { User, UserRole };
