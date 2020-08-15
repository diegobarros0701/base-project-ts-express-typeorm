const express = require('express');
const dotenv = require('dotenv');
import routes from './config/routes';

dotenv.config();

const app = express();
app.use(routes);

export { app };
