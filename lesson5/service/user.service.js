const User = require('../database/models/User');
require('../database/models/Car');

module.exports = {
    findUsers: () => User.find(),

    findUserByID: (userId) => User.findById(userId),

    createUser: (payload) => User.create(payload)
}