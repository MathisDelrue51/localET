const User = require("../models/user");

const authController = {

    getLogin: (req, res, next) => {
        res.json('formulaire de connexion');
    },

    postLogin: async (req, res, next) => {
        console.log(req.body);

        const user = await User.findByEmail(req.body.email);
        console.log(user);

        if (!user) {
            console.log('user non inscrit')
            res.redirect('/login');
            return;
        }

        if (user.password !== req.body.password) {
            console.log('Mauvais mot de passe')
            res.redirect('/login');
            return;
        }

        req.session.user = user;
        console.log('Vous etes connecté')

        res.redirect('/');       

    },


    logout: (req, res, next) => {
        // pour déconnecter l'utilisateur, il "suffit" de l'enlever de la session !
        // pour ce faire, on utilise le mot clef delete
        // delete sert à supprimer une propriété dans un objet
        delete req.session.user;

        res.redirect('/');

    }


};

module.exports = authController;