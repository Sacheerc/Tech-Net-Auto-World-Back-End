import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/auth';
import { UserRole } from '../models/User';

function authenticateToken(requiredRoles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    // Split and eliminate Bearer prefic from the token
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      console.log('Error while verifying the token: Unauthorized tooken');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      //Verify the obtained token
      const payload = verifyToken(token);

      // Attach user details to the request
      req.body.user = payload;

      // Check if user has required roles
      if (!requiredRoles.includes(payload.role)) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }
      next();
    } catch (err) {
      console.log('Error while verifying the token', err);
      return res.status(403).json({ message: 'Invalid token' });
    }
  };
}

export { authenticateToken };
