// src/auth.ts

import jwt from 'jsonwebtoken';
import { UserRole } from '../models/User';

const secretKey = 'your_secret_key'; // Replace with a secure secret key

interface JwtPayload {
    userId: number;
    username: string;
    role: UserRole
}

function generateToken(payload: JwtPayload): string {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function verifyToken(token: string): JwtPayload {
    console.log('verify token')
    return jwt.verify(token, secretKey) as JwtPayload;
}

export { generateToken, verifyToken };
