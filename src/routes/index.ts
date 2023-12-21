import { Router } from 'express';
import { authRouter } from './authRoutes';
import { inventoryRouter } from './inventoryRoutes';

const router = Router();
router.use('/auth', authRouter);
router.use('/inventory', inventoryRouter);

export default router;
