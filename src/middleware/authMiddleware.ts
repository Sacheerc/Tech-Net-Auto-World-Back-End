// src/middleware/authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/auth';
import { User, UserRole } from '../models/User';

function authenticateToken(requiredRoles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const payload = verifyToken(token);
      req.user = payload; // Attach user details to the request
      console.log(req.user);
      // Check if user has required roles
      if (!requiredRoles.includes(payload.role)) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      next();
    } catch (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
  };
}

export { authenticateToken };
