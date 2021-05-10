const Curioset = require('../models/curioset');

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
    }

}

module.exports = curiosetController;