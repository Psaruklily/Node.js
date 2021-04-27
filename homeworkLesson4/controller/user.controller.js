const userService = require('../service/user.service');
const { passwordHellper } = require('../helper');

module.exports = {
    getAllUsers: async(req, res) => {
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (error) {
            res.json(error.message);
        }
    },

    getUserByID: async(req, res) => {
        try {
            const { userId } = req.params;
            const userByID = await userService.findUserByID(userId);
            res.json(userByID);
        } catch (error) {
            res.json(error.message);
        }
    },

    signUp: async(req, res) => {
        try {
            const { password } = req.body;

            const hashPassword = await passwordHellper.hash(password);

            const message = await userService.createUser({...req.body, password: hashPassword });
            res.json(message);
        } catch (error) {
            res.json(error.message);
        }
    }
}