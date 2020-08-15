import express from 'express';
import dotenv from 'dotenv';
import routes from './config/routes';

dotenv.config();

const app = express();
app.use(routes);

export { app };
