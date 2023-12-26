import { Request, Response } from 'express';
import { Vehicle } from '../models/Vehicle';

class VehicleController {
  /**
   * Method to add new vehicles
   * @param req
   * @param res
   * @returns
   */
  static async add(req: Request, res: Response): Promise<void> {
    const vehicle = new Vehicle(req.body);

    try {
      await vehicle.save();
      console.log(`The vehicle successfully created: `, vehicle);
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
   * Load all vehicles
   * @param req
   * @param res
   * @returns
   */
  static async getAllVehicles(req: Request, res: Response): Promise<void> {
    try {
      const vehicles = await Vehicle.findAll();
      console.log(`Vehicles were successfully loaded`);
      res.status(200).json({
        success: true,
        vehicles,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
  }

  /**
   * Load vehicle by Id
   * @param req
   * @param res
   * @returns
   */
  static async loadVehicleById(req: Request, res: Response): Promise<void> {
    try {
      const vehicleNo = req.params.id;
      const vehicle = await Vehicle.findByPk(vehicleNo);
      console.log(`Vehicle ${vehicleNo} was successfully loaded`);
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
   * Remove vehicle by id
   * @param req
   * @param res
   * @returns
   */
  static async delete(req: Request, res: Response): Promise<void> {
    try {
      await Vehicle.destroy({ where: { vehicleNo: req.params.id } });
      console.log(
        `Vehicle for vehicleNo: ${req.params.id} successfully deleted`
      );
      res.status(200).json({
        success: true,
        message: `Vehicle for vehicleNo: ${req.params.id} successfully deleted`,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error,
      });
    }
  }
}

export default VehicleController;
