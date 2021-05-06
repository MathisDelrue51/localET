const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    console.log(req.session.user);

    if (!req.session.user) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.session.user
    console.log(token)
    if (token === 'null') {
        return res.status(401).send('Unauthorized request2');
    }

    // let payload = jwt.verify(token, 'jkjekhdeh');
    // console.log(payload)
    // if (!payload) {
    //     return res.status(401).send('Unauthorized request3');
    // }
    // console.log('token validé')
    // next();



    // const authHeader = req.headers['authorization']
    // console.log(authHeader);

    // //const token = authHeader && authHeader.split(' ')[1]

    // const token = req.headers.authorization.split(' ')[1];
    // console.log(token)

    // if (token == null) {
    //     return res.sendStatus(401)
    // }

    // console.log(process.env.TOKEN_SECRET)

    jwt.verify(token, 'jkjekhdeh', (err, user) => {
        console.log('coucou')

        if (err) {
            return res.status(403).json(err.message);
        }
        next()
    })
};

module.exports = authenticateToken;