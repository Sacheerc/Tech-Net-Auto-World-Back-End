import { Request, Response } from 'express';
// import { Inventory } from '../temp/Inventory';

class InventoryController {
  /**
   * Method for validate users and generate JWT token
   * @param req
   * @param res
   * @returns
   */
  static async add(req: Request, res: Response): Promise<void> {
    const id = 1;
    // const inventory = await Inventory.findOne({ where: { id } });
    res.status(401).json({ message: 'Invalid credentials' });
  }
}

export default InventoryController;
