const { AUTH_TOKEN_EXPIRE_TIME, AUTH_TOKEN_KEY } = process.env;
import jwt from 'jsonwebtoken';
import { UserRole } from '../models/User';

interface JwtPayload {
  userId: number;
  username: string;
  role: UserRole;
}

const jwtOptions = {
  expiresIn: AUTH_TOKEN_EXPIRE_TIME, // Expire token in 24 hours
};

/**
 * Generate JWT token
 * @param payload
 * @returns
 */
function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, AUTH_TOKEN_KEY!, jwtOptions);
}

/**
 * Verify passed JWT token
 * @param token
 * @returns
 */
function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, AUTH_TOKEN_KEY!) as JwtPayload;
}

export { generateToken, verifyToken };
