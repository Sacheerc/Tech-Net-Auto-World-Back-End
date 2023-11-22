// src/routes/authRoutes.ts

import express from 'express';
import AuthController from '../controllers/authController';
import { authenticateToken } from '../middleware/authMiddleware';
import { UserRole } from '../models/User';

const router = express.Router();

router.post('/login', AuthController.login);

router.get('/profile', authenticateToken([UserRole.USER, UserRole.ADMIN]), () => AuthController.profile);

router.get('/admin', authenticateToken([UserRole.ADMIN]), () => AuthController.admin);

export { router };
