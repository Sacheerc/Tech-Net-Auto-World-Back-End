import express from 'express';
import AuthController from '../controllers/authController';
import { authenticateToken } from '../middleware/authMiddleware';
import {
  validateHasParameters,
  validateEmailFormat,
  validatePasswordLength,
} from '../middleware/validation';
import { UserRole } from '../models/User';

const authRouter = express.Router();

//Define routes
authRouter.post(
  '/login',
  validateHasParameters('username', 'password'),
  AuthController.login
);

authRouter.post('/signup', AuthController.signup);

authRouter.get(
  '/profile',
  authenticateToken([UserRole.USER, UserRole.ADMIN]),
  AuthController.profile
);

authRouter.get(
  '/admin',
  authenticateToken([UserRole.ADMIN]),
  AuthController.admin
);

export { authRouter };
