import { Request, Response } from 'express';
import { User } from '../models/User';
import { generateToken } from '../utils/auth';
import bcrypt from 'bcrypt';
const { ENCRYPTION_KEY } = process.env;

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
    const user = await User.findOne({ where: { username } });

    //Validate user existence and the password
    const userExists = !!user;
    const passwordCorrect =
      userExists && (await bcrypt.compare(password, user.password));

    if (userExists && passwordCorrect) {
      //Generate JWT token
      const token = generateToken({
        userId: user.id,
        username: user.username,
        role: user.role,
      });

      res.status(200).json({
        success: true,
        user: {
          user_id: user.id,
          email: user.email,
          name: user.username,
          auth_token: token,
        },
      });
    } else {
      console.log(
        `Invalid credentials for user: ${username} TimeStamp: ${new Date()}`
      );
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  // static async test(req: Request, res: Response) {
  //   let users = await User.findAll({
  //     limit: 10,
  //     offset: 2,
  //     include: [
  //       {
  //         model: Post,
  //         attributes: ['imageUrl']
  //       }
  //     ]
  //   });
  //   res.json(users)
  // }

  /**
   * Method to signup new users
   * @param req
   * @param res
   * @returns
   */
  static async signup(req: Request, res: Response): Promise<void> {
    const { username, password, role } = req.body;

    // Encrypt user password
    const passwordHash = await bcrypt.hash(password, Number(ENCRYPTION_KEY!));

    //Create and save user in database
    const user = await User.create({
      username: username,
      password: passwordHash,
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
    res.status(200).json({
      success: true,
      user,
    });
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
