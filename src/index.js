const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebasConfig');
const homeController = require('./controllers/homeController');
const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);

app.listen(PORT, () => console.log(`Server i running on port ${PORT}...`));