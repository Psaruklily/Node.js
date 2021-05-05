const Token_auth = require('../database/models/Token_auth');

module.exports = {

    findByParams: (filterObject) => Token_auth.findOne(filterObject),

    createRecord: (tokenObject) => Token_auth.create(tokenObject),

    updateByID: (recordID, updateObject) => Token_auth.findByIdAndUpdate(recordID, updateObject)

}