const jwt = require('jsonwebtoken');
const Token_auth = require('../database/models/Token_auth');
const { JWT_SECRET } = require('../configs/config');

module.exports = {
    checkAccessTokenMiddleware: async(req, res, next) => {
        try {
            const access_token = req.get('Authorization');

            if (!access_token) {
                throw new Error('Token is required!');
            }

            jwt.verify(access_token, JWT_SECRET, error => {
                if (error) {
                    throw new Error('Not valid token VERIFY');
                }
            })

            const tokens = await Token_auth.findOne({ access_token }).populate('_user_id');

            console.log(tokens);

            if (!tokens) {
                throw new Error('Not valid token');
            }

            // console.log(access_token);

            req.user = tokens._user_id;

            next();
        } catch (error) {
            next(error);
        }
    }
}