const dotenv = require('dotenv').config();

const express = require('express');

const session = require('express-session');

const router = require('./app/router');

const cors = require ('cors');

const app = express();

const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Allow us to process the information from POST
app.use(express.urlencoded({extended: true}));

//We will put connected users in a session
app.use( session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: true, // must be in https
        maxAge: 7200000, // in milliseconds --> 2h
        httpOnly: true
    }
}));

const port = process.env.PORT || 1234;

// Server can receive data in JSON format
app.use(express.json());

//Keep the following lines code in this order!
app.use(cors());

app.use(express.static(path.join(__dirname,'../front/dist')));   

app.use('/api', router);

// We can create a cutomized 404 err page later
//app.use((req, res) => res.status(404).json('404 here')); 

app.get('/hello', (req,res) => {
    res.render('hello');
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
