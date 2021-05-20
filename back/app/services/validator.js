
const options = {
    abortEarly: false, // include all errors
};

const validateBody = (schema) => 
    (req, res, next) => {

        const {error} = schema.validate(req.body, options);

        if (error) {
            const {message, path} = error.details[0];
            // res.status(400).json({message, path});

            res.status(400).json(error.details);
            
        } else {
            next ();
        }
};

module.exports = {validateBody};