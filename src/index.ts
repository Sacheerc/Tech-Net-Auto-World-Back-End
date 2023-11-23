import express from 'express';
import sequelize from './configs/db';
import { authRouter } from './routes/authRoutes';

const app = express();
const port = 3000;

app.use(express.json());

//Define routes
app.use('/auth', authRouter);

sequelize
  .sync({ force: false }) // Use { force: true } only for development to drop existing tables
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
