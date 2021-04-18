const userService = require('../service/user.service');

module.exports = {
    getAllUsers: (req, res) => {
        const users = userService.findUsers();
        res.json(users);
    },

    getUserById: (req, res) => {
        const { userId } = req.params;
        const userById = userService.findUserById(userId);
        res.json(userById);
    },

    signUpUser: (req, res) => {
        const message = userService.createUser(req.body);
        res.json(message);
    },

    loginUser: (req, res) => {
        const loggedInUser = userService.loginUser(req.body);
        res.json(loggedInUser);
    }
}