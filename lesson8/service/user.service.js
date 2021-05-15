const User = require('../database/models/User');
require('../database/models/Car');

module.exports = {
    findUsers: () => User.find(),

    findUserByID: (userId) => User.findById(userId),

    createUser: (payload) => User.create(payload),

    updateUserByID: (userId, updateObject) => User.updateOne({ _id: userId }, { $set: updateObject })

}