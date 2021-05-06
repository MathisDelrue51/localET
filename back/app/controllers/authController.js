const User = require("../models/user");

const authController = {

    getLogin: (req, res, next) => {
        res.json('formulaire de connexion');
    },

    postLogin: async (req, res, next) => {

        try {
            const user = await User.findByEmail(req.body.email);

            if (user.password !== req.body.password) {
                console.log('Mauvais mot de passe')
                throw new Error(`Wrong password`);                
            }

            req.session.user = user;
            console.log('Vous etes connecté')

            res.status(200).json({
                pseudo: user.pseudo,
                logged : true,
            });

        } catch (err) {
            res.status(401).json(err.message);
        }



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