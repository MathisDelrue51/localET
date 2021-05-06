const User = require('../models/user');

//Is it necessary since the information will be in the state?

//This middleware will take the user in the session (if it exists), and copy it in res.locals
//All information of the connected user will be available in all views
function userToLocals (req, res, next) {       

    if (req.session.user) {
        res.locals.user = new User(req.session.user);
    }

    next();
};

module.exports = userToLocals;