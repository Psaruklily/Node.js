const { Schema, model } = require('mongoose');

const token_authSchema = new Schema({
    access_token: { type: String },
    refresh_token: { type: String },
    _user_id: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });


module.exports = model('Token_auth', token_authSchema);