const { userValidators } = require('../validator');
const ErrorHandler = require('../error/ErrorHandler');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (error) {
            //res.status(400).json(error.message);
            next(error);
        }
    },

    //PSEUDO CODE

    // checkIsPasswordValid: (req, res, next) => {
    //     try {
    //         if (!req) {
    //             throw new ErrorHandler(400, 4001)
    //         }
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}