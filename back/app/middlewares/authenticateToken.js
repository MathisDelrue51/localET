const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {    

    if (!req.session.user) {
        return res.status(401).send('No user connected');
    }

    const token = req.session.user    

    jwt.verify(token, 'Bibou', (err, user) => {        
        if (err) {
            return res.status(403).json(err.message);
        }
        next()
    })
   
};

module.exports = authenticateToken;