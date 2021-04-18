const DB = require('../database/users.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    findUsers: () => {
        return DB;
    },

    findUserById: (userId) => {
        return DB[userId];
    },

    createUser: (payloadUser) => {
        fs.readFile('D:/JIT/nodeLearn/homeworkLesson3/database/users.json', (error, data) => {
            if (error) throw error;

            let fileUsers = JSON.parse(data.toString());

            fileUsers.push(payloadUser);

            let returnJson = JSON.stringify(fileUsers);

            fs.writeFile('D:/JIT/nodeLearn/homeworkLesson3/database/users.json', returnJson, (error) => {
                if (error) throw error;
            })
        })
        return 'You are successfully registered!';
    },

    loginUser: (payloadUser) => {
        return payloadUser;
    }
}