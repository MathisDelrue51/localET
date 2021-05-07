const jwt = require('jsonwebtoken');

function generateAccessToken(email) {
    return jwt.sign(email, process.env.TOKEN_SECRET, {
        expiresIn: process.env.EXPIRESIN
      });
};

module.exports = generateAccessToken;