const userService = require('../service/user.service');

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const users = userService.findUsers();
            res.json(users);
        } catch (error) {
            res.json(error.message);
        }
    },

    getUserByID: (req, res) => {
        const { userId } = req.params;
        const userByID = userService.findUserByID(userId);
        res.json(userByID);
    },

    signUp: (req, res) => {
        console.log('req.body', req.body)
        const message = userService.createUser(req.body);
        res.json(message);
    }
}