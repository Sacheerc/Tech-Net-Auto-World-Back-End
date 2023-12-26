import express from 'express';
import VehicleController from '../controllers/vehicleController';

const vehicleRouter = express.Router();

vehicleRouter.post('/add', VehicleController.add);
vehicleRouter.get('/all', VehicleController.getAllVehicles);
vehicleRouter.get('/:id', VehicleController.loadVehicleById);
vehicleRouter.delete('/:id', VehicleController.delete);

export { vehicleRouter };
