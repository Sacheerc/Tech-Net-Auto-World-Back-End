import express from 'express';
import InventoryController from '../controllers/inventoryController';
import { authenticateToken } from '../middleware/authMiddleware';
import { validateHasParameters } from '../middleware/validation';
import { UserRole } from '../models/User';

const inventoryRouter = express.Router();

//Define routes
inventoryRouter.post(
  '/add',
  authenticateToken([UserRole.ADMIN]),
  InventoryController.add
);

export { inventoryRouter };
