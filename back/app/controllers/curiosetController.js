const Curioset = require('../models/cuioset');

const curiosetController = {

    // Route GET /
    allCuriosets: async (req, res) => {

        const Curiosets = await Curioset.findAll();

        res.json(Curiosets);
    }
    
}

module.exports = curiosetController;