const userService = require('../service/user.service');
const { passwordHasher } = require('../helpers');

module.exports = {
    getAllUsers: async(req, res) => {
        const users = await userService.findUsers(req.query);
        res.json(users);
    },

    getUserById: async(req, res) => {
        const { userId } = req.params;
        const userById = await userService.findUserById(userId);
        res.json(userById);
    },

    // signUpUser: (req, res) => {
    //     try {
    //         const { password } = req.body;
    //         const hashPassword = await passwordHasher.hash(password);

    //         const message = userService.createUser({...req.body, password: hashPassword });
    //         res.status(201).json(message);
    //     } catch (error) {
    //         res.json(error.message);
    //     }
    // },

    signUpUser: async(req, res) => {
        try {
            await userService.createUser(req.body);

            res.status(201).json('USER IS CREATED!')
        } catch (error) {
            res.json(error.message);
        }
    },

    loginUser: (req, res) => {
        try {
            const loggedInUser = userService.loginUser(req.body);
            res.status(200).json(loggedInUser);
        } catch (error) {
            res.json(error.message);
        }
    }
}