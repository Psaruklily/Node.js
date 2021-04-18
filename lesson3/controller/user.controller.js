const userService = require('../service/user.service')

module.exports = {
    getAllUsers: (req, res) => {
        const users = userService.findUsers();
        res.json(users)
    },

    getOneUser: (req, res) => {
        const { id } = req.params;
        const user = userService.findUserById(id);
        res.json(user);
    },

    createUser: (req, res) => {
        userService.createUser(req.body);
        console.log(req.body);
        res.status(201);
        res.json('User is created!');
    }

}