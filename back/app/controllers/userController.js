const User = require('../models/user');
const Curioset = require('../models/curioset');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {

    // GET /profile/:id
    oneUserById: async (req, res) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        const decoded = jwt.decode(token)

        try {
            //Verify if the email found in the token correspond to one in the db.
            //If yes, compare the id to the id in the request
            const user = await User.findByEmail(decoded.email);
            if (user) {
                const userId = req.params.id;

                if (userId == user.id) {

                    const createdCuriosets = await Curioset.findAllByUserId(user.id);
                    res.status(200).json({
                        email: user.email,
                        pseudo: user.pseudo,
                        curiosets: createdCuriosets
                    });

                } else {
                    throw new Error('Your token doesn\'t correspond to the page you want to look at')
                }
            } else {
                throw new Error('You don\'t have access');
            }

        } catch (err) {
            res.status(404).json(err.message);
        }
    },

    // POST /signup
    newUser: async (req, res) => {
        const errorDetails = [];
        try {
            // We call the the function findByEmail as req.body.email to check if this email exists in db
            const newEmail = await User.findByEmail(req.body.email);

            if (newEmail === null) {

                // if result is null , thus the email doesn't exist in db and we can new user after checking pseudo
                const newPseudo = await User.findByPseudo(req.body.pseudo);
                if (newPseudo === null) {

                    //The password is encrypted
                    const encryptedPassword = bcrypt.hashSync(req.body.password, 10);

                    const theNewUser = new User({
                        email: req.body.email,
                        password: encryptedPassword,
                        pseudo: req.body.pseudo
                    });
                    await theNewUser.save();
                    console.log('Vous êtes inscrits');

                    res.status(201).json(theNewUser.email);

                } else {
                    errorDetails.push({
                        message:`Ce pseudo est déjà utilisé`,
                        path:["pseudo"]
                    });
                    throw new Error(`Pseudo already exists`);

                }

            } else {              
                errorDetails.push({
                    message:`Ce mail est déjà utilisé`,
                    path:["email"]
                });
                throw new Error(`Email already exists`);
            }
            

        } catch (err) {
            res.status(403).json(errorDetails);
        }
    }

}

module.exports = userController;