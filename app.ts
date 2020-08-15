const express = require('express');
const dotenv = require('dotenv');
import router from './config/routes';

dotenv.config();

const app = express();
app.use(router);

export { app }