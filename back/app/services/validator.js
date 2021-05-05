const validateBody = (schema) => 
    (req, res, next) => {

        const {error} = schema.validate(req.body);

        if (!error) {
            next ();
        } else {

            const {message, path} = error.details[0];

            res.status(400).json({message, path});
        }
};

module.exports = {validateBody};