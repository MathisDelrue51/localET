const User = require("../models/user");

const generateAccessToken = require('../middlewares/generateAccessToken');

const authController = {

    getLogin: (req, res, next) => {
        res.json('formulaire de connexion');
    },

    postLogin: async (req, res, next) => {

        try {
            const user = await User.findByEmail(req.body.email);

            if (user === null){
                console.log("pas d'email correspondant");
                throw new Error(`no user with email ${req.body.email}`);
            }

            if (user.password !== req.body.password) {
                console.log('Mauvais mot de passe')
                throw new Error(`Wrong password`);                
            }

            const token = generateAccessToken({
                email: req.body.email
            });

            req.session.user = token;
            console.log('Vous êtes connecté')

            res.status(200).json({
                pseudo: user.pseudo,
                logged : true,
                token: token
            });

        } catch (err) {
            res.status(401).json(err.message);
        }      

    },

    logout: (req, res, next) => {        
        delete req.session.user;
        res.redirect('/');
    },

    connected: (req, res, next) => {
        res.json('Un utilisateur est connecté');
    }

};

module.exports = authController;