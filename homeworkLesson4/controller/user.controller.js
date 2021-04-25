const userService = require('../service/user.service');


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
            const message = await userService.createUser(req.body);
            res.json(message);
        } catch (error) {
            res.json(error.message);
        }
    }
}