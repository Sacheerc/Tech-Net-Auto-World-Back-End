const bcrypt = require('bcrypt');
const db = require('../config/db');

const User = {
  findByUsername: async (username) => {
    const [rows, fields] = await db.execute(
      'SELECT * FROM userInfo WHERE userName = ?',
      [username]
    );
    return rows.length > 0 ? rows[0] : null;
  },

  findById: async (id) => {
    const [rows, fields] = await db.execute(
      'SELECT * FROM userInfo WHERE userId = ?',
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  },

  addUser: async (userId, username, password, email) => {
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result, fields] = await db.execute(
      'INSERT INTO userInfo (userId, userName, password, email) VALUES (?, ?, ?, ?)',
      [userId, username, hashedPassword, email]
    );
    const insertedUserId = result.insertId;
    return { id: userId, username, password: hashedPassword, email };
  },
};

module.exports = User;
