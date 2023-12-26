import { Router } from 'express';
import { authRouter } from './authRoutes';
import { inventoryRouter } from './inventoryRoutes';
import { vehicleRouter } from './vehicleRoutes';

const router = Router();
router.use('/auth', authRouter);
router.use('/inventory', inventoryRouter);
router.use('/vehicle', vehicleRouter);

export default router;
