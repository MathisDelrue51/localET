const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {    
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null){
        return res.status(401).send('No user connected');
    } 

    //And verify if token didn't expire
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {        
        if (err) {
            return res.status(403).json(err.message);
        }
        next()
    })
   
};

module.exports = authenticateToken;