const express = require('express');
const controllerMail = require('./controllerMail');

require("dotenv").config();
const port = process.env.SERVER_PORT || 10000;
const host = process.env.HOST || 'localhost';

const app = express();
app.use(express.static(process.env.SITE_TO_DISPLAY));
app.use(express.json())

// Add a middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.post('/sendEmail', controllerMail.sendMail);

app.post('/sendEmail', (req, res, next) => {
    console.log('Received request to /sendEmail');
    next();
}, controllerMail.sendMail);

app.listen(port, () => {
    console.log(`Listening on port ${port} run http://${host}:${port}`);
});