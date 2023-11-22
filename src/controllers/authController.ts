// src/controllers/authController.ts

import { Request, Response } from 'express';
import { User, UserRole } from '../models/User';
import { generateToken } from '../utils/auth';

class AuthController {
    static async login(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username, password } });
        console.log(user);
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const token = generateToken({
            userId: user.id,
            username: user.username,
            role: user.role,
        });

        res.json({ token });
    }

    static async signup(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        const { username, password, role } = req.body;
        console.log(username, password, role)

        const user = await User.create({ username: username, password: password, role: role});

        if (!user) {
            res.status(401).json({ message: 'Failed' });
            return;
        }

        res.json({ user });
    }

    static profile(req: Request, res: Response ): void {
        // Access user details from req.user
        res.json({ user: req.user });
    
    }

    static async admin(req: Request, res: Response): Promise<void> {
        // Accessible only to users with the 'admin' role
        res.json({ message: 'Admin-only access' });
    }
}

export default AuthController;
