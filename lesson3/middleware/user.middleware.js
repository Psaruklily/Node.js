const errorCodes = require('../constant/errorCodes.enum');

module.exports = {

    checkIsIdValid: (req, res, next) => {
        try {
            const userId = +req.params.id;

            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error('NOT VALID ID');
            }

            next();
        } catch (error) {
            res.status(errorCodes.BAD_REQUEST).json(error.message);
        }
    },


    isUserValid: (req, res, next) => {
        try {
            const { name, password } = req.body;

            if (!name || !password) throw new Error('Some field is empty');
            if (password.length < 8) throw new Error('Too weak password');

            next();

        } catch (error) {
            res.status(errorCodes.BAD_REQUEST).json(error.message);
        }
    }

}