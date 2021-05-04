const dotenv = require('dotenv').config();

const express = require('express');

const app = express();

const router = require('./app/router');

const cors = require ('cors');

const port = process.env.PORT || 1234;

app.use(express.json());

app.use(cors());

app.use('/v1', router);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
