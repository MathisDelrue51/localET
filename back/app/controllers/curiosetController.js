const Curioset = require('../models/curioset');

const curiosetController = {

    // Route GET /
    allCuriosets: async (req, res) => {

        const curiosets = await Curioset.findAll();

        res.json(curiosets);
    }
    
}

module.exports = curiosetController;