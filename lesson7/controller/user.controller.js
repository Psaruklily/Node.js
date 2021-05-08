const { userService, emailService } = require('../service');
const { passwordHellper } = require('../helper');
const { emailActionEnum } = require('../constatnt');

module.exports = {
    getAllUsers: async(req, res, next) => {
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    getUserByID: async(req, res, next) => {
        try {
            const { userId } = req.params;
            const userByID = await userService.findUserByID(userId);
            res.json(userByID);
        } catch (error) {
            next(error);
        }
    },

    signUp: async(req, res, next) => {
        try {
            const { password, email } = req.body;

            const hashPassword = await passwordHellper.hash(password);

            const message = await userService.createUser({...req.body, password: hashPassword });

            await emailService.sendMail(email, emailActionEnum.WELCOME, { userName: email });

            res.json(message);
        } catch (error) {
            next(error);
        }
    },

    deleteUser: async(req, res, next) => {
        try {
            const { userId } = req.params;

            if (userId !== req.user._id.toString()) {
                throw new Error('Unauthorized');
            }

            // console.log('*********************************************');
            // console.log(req.user);
            // console.log('*********************************************');

            res.json(`${userId} is deleted`);
        } catch (error) {
            next(error);
        }
    }
}