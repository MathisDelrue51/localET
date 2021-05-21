
const options = {
    abortEarly: false, // include all errors
};

const validateBody = (schema) => 
    (req, res, next) => {

        const {error} = schema.validate(req.body, options);

        if (error) {            
            res.status(400).json(error.details);            
        } else {
            next ();
        }
};

module.exports = {validateBody};