// project dependencies
import sequelize from './configs/db';
import app from './app';
const { SERVER_PORT } = process.env;

// app listening
sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.info(`App running on port ${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
