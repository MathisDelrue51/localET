const User = require("../models/user");

const generateAccessToken = require('../middlewares/generateAccessToken');

const authController = {

    //POST /login
    postLogin: async (req, res, next) => {

        try {
            //Look in the database if there is a user with the corresponding email and stock it in user
            const user = await User.findByEmail(req.body.email);

            //If user is null it means the email is not regsitered in the database and it throws an error
            if (user === null){
                console.log("pas d'email correspondant");
                throw new Error(`no user with email ${req.body.email}`);
            }

            //If password doesn't match it throws an error
            if (user.password !== req.body.password) {
                console.log('Mauvais mot de passe')
                throw new Error(`Wrong password`);                
            }

            //If we reach this point the password and the email are working.
            //Then we generate an access token
            const token = generateAccessToken({
                email: req.body.email
            });

            //And store it in the session
            req.session.user = token;
            console.log('Vous êtes connecté');

            //Everything went right, we send needed information to the front
            res.status(200).json({
                pseudo: user.pseudo,
                id: user.id,
                logged : true,
                token: token
            });

        } catch (err) {
            //If we catched an error, the user in not authorize to connect with those logins
            res.status(401).json(err.message);
        }      

    },

    //We remove user from session
    //TODO should we set current token time to 0?
    logout: (req, res, next) => {        
        delete req.session.user;
        res.redirect('/');
    },

    //Just to do some test during dev
    connected: (req, res, next) => {
        res.json('Un utilisateur est connecté');
    }

};

module.exports = authController;