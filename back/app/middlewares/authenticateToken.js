const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {    

    //If no user in the session, no need to verify the token 
    if (!req.session.user) {
        return res.status(401).send('No user connected');
    }

    //Else, store session user in token
    const token = req.session.user    

    //And verify if token didn't expire
    jwt.verify(token, 'Bibou', (err, user) => {        
        if (err) {
            return res.status(403).json(err.message);
        }
        next()
    })
   
};

module.exports = authenticateToken;