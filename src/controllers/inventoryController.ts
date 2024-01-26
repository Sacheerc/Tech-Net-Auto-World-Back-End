import { Request, Response } from 'express';
import { Inventory } from '../models/Inventory';

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

  /**
  * Load all inventories
  * @param req
  * @param res
  * @returns
  */
  static async getAllInventories(req: Request, res: Response): Promise<void> {
    try {
      const inventories = await Inventory.findAll();
      console.log(`Inventories were successfully loaded`);
      res.status(200).json({
        success: true,
        inventories,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
  }

  /**
   * Load inventory by Id
   * @param req
   * @param res
   * @returns
   */
  static async loadInventoryById(req: Request, res: Response): Promise<void> {
    try {
      const code = req.params.id;
      const vehicle = await Inventory.findByPk(code);
      console.log(`Inventory ${code} was successfully loaded`);
      res.status(200).json({
        success: true,
        vehicle,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
  }

    /**
   * Remove inventory by id
   * @param req
   * @param res
   * @returns
   */
    static async delete(req: Request, res: Response): Promise<void> {
      try {
        await Inventory.destroy({ where: { code: req.params.id } });
        console.log(
          `Inventory for code: ${req.params.id} successfully deleted`
        );
        res.status(200).json({
          success: true,
          message: `Inventory for code: ${req.params.id} successfully deleted`,
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
