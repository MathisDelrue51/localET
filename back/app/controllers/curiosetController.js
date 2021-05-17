const Curioset = require('../models/curioset');
const User = require('../models/user');
const userController = require('./userController');

const jwt = require('jsonwebtoken');

const curiosetController = {

    //GET /
    allCuriosets: async (req, res) => {

        try {
            const curiosets = await Curioset.findAll();

            res.status(200).json(curiosets);
        } catch (err) {
            res.status(500).json(err.message);
        }

    },

    //GET /curioset/:id
    oneCuriosetById: async (req, res) => {
        try {
            const curiosetId = req.params.id;

            const curioset = await Curioset.findOne(curiosetId);

            //This verification is a security. If the id doesn't correspond to one in the db, it should throw an error in the model.
            if (curioset) {
                res.status(200).json(curioset);
            } else {
                throw new Error('Cant find curioset with id ' + curiosetId)                
            }

        } catch (err) {
            res.status(404).json(err.message);
        }
    },

    //POST /curioset
    newCurioset: async (req, res) => {
        console.log(req.body);

        const newCurioset = new Curioset(req.body);

        try {
            await newCurioset.save();

            res.status(201).json(newCurioset);
        } catch (err) {
            console.log(err)
            res.status(500).json(err.message);
        }
    },

    //PUT /curioset/id
    updateCurioset: async (req, res) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        
        const decoded = jwt.decode(token)
 
        try {

            const user = await User.findByEmail(decoded.email);             

            if (user) {
                const updatedCurioset = new Curioset(req.body);
                console.log(updatedCurioset);

                if (updatedCurioset.user_id == user.id) {
                    await updatedCurioset.save();

                     res.status(200).json(updatedCurioset);

                    console.log("curioset mise à jour")
                }else {

                throw new Error('L\'id de l\'utilisateur ne correspond pas');
                res.status(403)
                }
            }   

        } catch (err) {
            console.log(err)
            res.status(500).json(err.message);
        }
    }

}

module.exports = curiosetController;