import express from 'express';
// global dependencies
import * as dotenv from 'dotenv';
dotenv.config(); // initialise environment variables using a local .env file
import cors from 'cors';

// project dependencies
import routes from './routes';

// set express app
const app = express();

// Enable CORS for all routes
app.use(cors());

// middlewares
app.use(express.json());

// routes
app.use(routes);

export default app;
