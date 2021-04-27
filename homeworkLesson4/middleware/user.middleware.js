const { userValidators } = require('../validator');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}