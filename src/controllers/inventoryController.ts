import { Request, Response } from 'express';
import { Inventory } from '../models/Inventory';
// import { Inventory } from '../temp/Inventory';

class InventoryController {
  /**
   * Method for validate users and generate JWT token
   * @param req
   * @param res
   * @returns
   */
  static async add(req: Request, res: Response): Promise<void> {
    const inventory = new Inventory(req.body);

    try {
      await inventory.save();
      console.log(`The Inventory successfully created: `, inventory);
      res.status(200).json({
        success: true,
        inventory,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
    res.status(401).json({ message: 'Invalid credentials' });
  }

  /**
   * Load inventory code list
   * @param req
   * @param res
   * @returns
   */
  static async loadInventoryCodeList(req: Request, res: Response): Promise<void> {
    try {
      const inventoryItems = await Inventory.findAll({ attributes: ['code'] });
      const inventoryCodeList: string[] = inventoryItems.map(item => item.code);
      console.log(`Inventory codes were successfully loaded`);
      res.status(200).json({
        success: true,
        inventoryCodeList,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
  }

  /**
   * Load inventoryItem by code
   * @param req
   * @param res
   * @returns
   */
  static async loadInventoryByCode(req: Request, res: Response): Promise<void> {
    try {
      const code = req.params.code;
      const inventoryItem = await Inventory.findOne({ where: { code: code } });
      console.log(`InventoryItem: ${code} was successfully loaded`);
      res.status(200).json({
        success: true,
        inventoryItem,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
  }
}

export default InventoryController;
