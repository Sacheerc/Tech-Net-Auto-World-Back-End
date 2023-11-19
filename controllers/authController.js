const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const secretKey = '1234567'; //Todo: need to obtain from a configuration

const authController = {
  register: async (req, res) => {
    const { userId, username, password, email } = req.body;
    const newUser = await User.addUser(userId, username, password, email);
    res.json({ message: 'User registered successfully', user: newUser });
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      secretKey,
      { expiresIn: '1h' }
    );
    res.json({ token });
  },

  protectedRoute: (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  },
};

module.exports = authController;
