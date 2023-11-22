// src/routes/authRoutes.ts

import express from 'express';
import AuthController from '../controllers/authController';
import { authenticateToken } from '../middleware/authMiddleware';
import { UserRole } from '../models/User';

const authRouter = express.Router();

authRouter.post('/login', AuthController.login);

authRouter.post('/signup', AuthController.signup);

authRouter.get('/profile', authenticateToken([UserRole.USER, UserRole.ADMIN]), AuthController.profile);

authRouter.get('/admin', authenticateToken([UserRole.ADMIN]), AuthController.admin);

export { authRouter };
