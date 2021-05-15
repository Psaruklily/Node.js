const { userValidators } = require('../validator');
const ErrorHandler = require('../error/ErrorHandler');
const User = require('../database/models/User');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (error) {
            next(error);
        }
    },

    checkIsUserPresent: async(req, res, next) => {
        try {
            const { email } = req.body;

            const user = await User.findOne({ email }).select('+password');

            if (!user) {
                throw new Error('No user');
            }

            req.user = user;

            next();
        } catch (error) {
            next(error);
        }
    }

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