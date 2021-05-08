const User = require('../models/user');

const userSchema = require('../schemas/user');

const userController = {

    oneUser: async (req,res) => {
        const {id} = req.params;

        const theUser = await User.findOne(id);

        if (theUser) {
            res.json(theUser);
        } else {
            res.status(404).json('No user with this id');
        }
    },

    newUser: async (req, res) => {
     
        // We call the the function findByEmail as req.body.email to check if this email exists in db

            const newEmail = await User.findByEmail(req.body.email);

            if (newEmail === null) { 

        // if result is null , thus the email doesn't exist in db and we can new user after checking pseudo

                const newPseudo = await User.findByPseudo(req.body.pseudo);

                if (newPseudo === null) {

                    const theNewUser = new User(req.body);
                    await theNewUser.save();
                    console.log('Vous êtes inscrits');

                    res.status(201).json(theNewUser); 

                } else {

                    console.log('pseudo déjà existant');
                    res.status(403).json('Pseudo already exists');

                }  
                
            } else {

                console.log('email déjà existant');
                res.status(403).json('Email already exists');

            }
        
        }   
}

module.exports = userController;