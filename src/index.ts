// project dependencies
import sequelize from './configs/db';
import app from './app';
const { SERVER_PORT } = process.env;

// app listening
sequelize
  .sync({ force: false }) // Use { force: true } only for development to drop existing tables
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.info(`App running on port ${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
