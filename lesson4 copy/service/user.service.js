const User = require('../database/models/User');
const fs = require('fs');

module.exports = {
    findUsers: (filterObject) => User.find(filterObject), // повернути всіх юзерів

    findUserById: (userId) => User.findById(userId),

    createUser: (payloadUser) => User.create(payloadUser),

    loginUser: (payloadUser) => {
        return payloadUser;
    }
}