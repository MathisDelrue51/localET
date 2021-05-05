const dotenv = require('dotenv').config();

const express = require('express');

const session = require('express-session');

const router = require('./app/router');

const cors = require ('cors');

const userToLocals = require('./app/middlewares/userToLocals');

const app = express();

//Allow us to process the information from POST
app.use(express.urlencoded({extended: true}));

//We will put connected users in a session
app.use( session({
    saveUninitialized: true,
    resave: true,
    secret: 'It is a secret',
    cookie: {
        secure: false, // false allow us not to be in https
        maxAge: 1000*60*60*2 // 2 hours !
    }
}));

const port = process.env.PORT || 1234;

app.use(express.json());

app.use(cors());

app.use( userToLocals );

app.use('/v1', router);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
