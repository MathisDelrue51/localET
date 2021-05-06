const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    console.log(token)
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }

    let payload = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(payload)
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    console.log('token validé')
    next();



    // const authHeader = req.headers['authorization']
    // console.log(authHeader);

    // //const token = authHeader && authHeader.split(' ')[1]

    // const token = req.headers.authorization.split(' ')[1];
    // console.log(token)

    // if (token == null) {
    //     return res.sendStatus(401)
    // }

    // console.log(process.env.TOKEN_SECRET)

    // jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    //     console.log(err)

    //     if (err) {
    //         return res.sendStatus(403)
    //     }

    //     req.user = user

    //     next()
    // })
};

module.exports = authenticateToken;