const fs = require('fs');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { name, age, email, password } = req.body;

            if (!name || !age || !email || !password) throw new Error('Some field is empty');
            if (password.length < 6) throw new Error('Too weak password!');

            next();

        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    alreadyRegistered: (req, res, next) => {
        try {
            const { email } = req.body;

            fs.readFile('D:/JIT/nodeLearn/homeworkLesson3/database/users.json', (err, data) => {
                //if (err) throw err;
                if (err) {
                    next(err)
                };


                let fileUsers = JSON.parse(data.toString());

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