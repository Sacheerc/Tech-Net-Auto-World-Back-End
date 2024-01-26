import express from 'express';
import InventoryController from '../controllers/inventoryController';

const inventoryRouter = express.Router();

//Define routes
inventoryRouter.post('/add', InventoryController.add);
inventoryRouter.get('/inventory-code-list', InventoryController.loadInventoryCodeList);
inventoryRouter.get('/all', InventoryController.getAllInventories);

inventoryRouter.get('/:code', InventoryController.loadInventoryByCode);
inventoryRouter.get('/:id', InventoryController.loadInventoryById);
inventoryRouter.delete('/:id', InventoryController.delete);

export { inventoryRouter };
