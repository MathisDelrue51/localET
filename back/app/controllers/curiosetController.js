const Curioset = require('../models/curioset');

const curiosetController = {

    //GET /
    allCuriosets: async (req, res) => {

        const curiosets = await Curioset.findAll();

        res.status(200).json(curiosets);
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