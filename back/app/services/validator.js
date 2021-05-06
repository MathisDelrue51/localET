const validateBody = (schema) => 
    (req, res, next) => {

        const {error} = schema.validate(req.body);

        if (error) {

            const {message, path} = error.details[0];
            res.status(400).json({message, path});
            
        } else {
            next ();
        }
};

module.exports = {validateBody};