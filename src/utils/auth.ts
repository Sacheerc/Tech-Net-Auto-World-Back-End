import jwt from 'jsonwebtoken';
import { UserRole } from '../models/User';

//Todo: Replace with a secure secret key and need to implement a mecanism to obtain key from a config
const secretKey = '1234567';

interface JwtPayload {
  userId: number;
  username: string;
  role: UserRole;
}

/**
 * Generate JWT token
 * @param payload
 * @returns
 */
function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

/**
 * Verify passed JWT token
 * @param token
 * @returns
 */
function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, secretKey) as JwtPayload;
}

export { generateToken, verifyToken };
