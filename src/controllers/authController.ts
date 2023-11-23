import { Request, Response } from 'express';
import { User } from '../models/User';
import { generateToken } from '../utils/auth';

class AuthController {
  /**
   * Method for validate users and generate JWT token
   * @param req
   * @param res
   * @returns
   */
  static async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;

    //Retrieving user data from database
    const user = await User.findOne({ where: { username, password } });
    if (!user) {
      console.log(
        `Invalid credentials for user: ${username} TimeStamp: ${new Date()}`
      );
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    //Generate JWT token
    const token = generateToken({
      userId: user.id,
      username: user.username,
      role: user.role,
    });

    res.json({ token });
  }

  /**
   * Method to signup new users
   * @param req
   * @param res
   * @returns
   */
  static async signup(req: Request, res: Response): Promise<void> {
    const { username, password, role } = req.body;

    //Create and save user in database
    const user = await User.create({
      username: username,
      password: password,
      role: role,
    });

    if (!user) {
      console.log(
        `Create user has been failed. user: ${username} TimeStamp: ${new Date()}`
      );
      res.status(401).json({ message: 'Failed' });
      return;
    }

    console.log(`The user succeefully created: `, user);
    res.json({ user });
  }

  /**
   * Method to retrive user details
   * @param req
   * @param res
   */
  static profile(req: Request, res: Response): void {
    // Access user details from request. The user should be assigned to body when JWT creation
    res.json({ user: req.body.user });
  }

  /**
   * Sample method to demonstrate admin authorization
   * @param req
   * @param res
   */
  static async admin(req: Request, res: Response): Promise<void> {
    // Accessible only to users with the 'admin' role
    res.json({ message: 'Admin-only access' });
  }
}

export default AuthController;
