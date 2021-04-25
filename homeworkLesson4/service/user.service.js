const DB = require('../database/users.json');
const fs = require('fs');
let path = require('path');

module.exports = {
    findUsers: () => {
        return DB;
    },

    findUserByID: (userId) => {
        return DB[userId];
    },

    createUser: (payload) => {
        const filePath = path.join(__dirname, '../', 'database', 'users.json');

        fs.readFile(filePath, (error, data) => {
            if (error) throw error;

            const parsedFile = JSON.parse(data.toString());

            parsedFile.push(payload);
            const returnFile = JSON.stringify(parsedFile);

            fs.writeFile(filePath, returnFile, (error) => {
                if (error) throw error;
            })
        })
        return 'Congratulation! You are successfully registered.'
    }
}