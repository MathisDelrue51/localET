const User = require("../models/user");
const bcrypt = require('bcrypt');
const generateAccessToken = require('../middlewares/generateAccessToken');

const authController = {

    //POST /login
    postLogin: async (req, res, next) => {

        try {
            //Look in the database if there is a user with the corresponding email and stock it in user
            const user = await User.findByEmail(req.body.email);

            //If user is null it means the email is not regsitered in the database and it throws an error
            if (!user){
                throw new Error(`no user with email ${req.body.email}`);
            }

            const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

            //If password doesn't match it throws an error
            if (!isPasswordValid) {
                throw new Error(`Wrong password`);                
            }

            //If we reach this point the password and the email are working.
            //Then we generate an access token
            const token = generateAccessToken({
                email: req.body.email
            });

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
    //TODO should we set current token time to 0? And remove token from state
    logout: (req, res, next) => {        
        res.redirect('/');
    },

    //Just to do some test during dev
    connected: (req, res, next) => {
        res.json('Un utilisateur est connecté');
    }

};

module.exports = authController;