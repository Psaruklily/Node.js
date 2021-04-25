const fs = require('fs');
const { userValidators } = require('../validator');
require('../database/models/Cars');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    alreadyRegistered: (req, res, next) => {
        try {
            const { email } = req.body;

            fs.readFile('D:/JIT/nodeLearn/lesson4/database/users.json', (err, data) => {

                if (err) throw error;

                const fileUsers = JSON.parse(data.toString());

                for (let user of fileUsers) {

                    if (user.email === email) throw new Error('Email already exists');
                    if (user.email !== email) throw new Error('You are not registered yet');
                }
            })

            next();

        } catch (error) {
            res.status(400).json(error.message);
        }
    }

}