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

        const theNewUser = new User(req.body);

        try{
            
            await theNewUser.save();
            res.status(201).json(theNewUser);
        } catch(err) {
            res.status(500).json(err.message);
        }
    }
    
}

module.exports = userController;