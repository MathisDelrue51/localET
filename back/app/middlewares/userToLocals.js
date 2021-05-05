
//This middleware will take the user in the session (if it exists), and copy it in res.locals
//All information of the connected user will be available in all views
function userToLocals (req, res, next) {   

    console.log("dans le middleware", req.session.user);

    res.locals.user = req.session.user;

    next();
};

module.exports = userToLocals;