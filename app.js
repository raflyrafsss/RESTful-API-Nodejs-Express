require('./app/config/database.config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

// Importing Routes
const alumniRoute = require('./app/routes/alumni.routes');
app.use('/alumni', alumniRoute);

app.listen(3000);