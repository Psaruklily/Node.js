const User = require('../database/models/User');
const Token_auth = require('../database/models/Token_auth');
const ErrorHandler = require('../error/ErrorHandler');
const { passwordHellper, tokenizer } = require('../helper');
const { authService } = require('../service');

module.exports = {
    userAuth: async(req, res, next) => {
        try {
            const { body: { password }, user } = req;

            await passwordHellper.compare(password, user.password);

            const tokens = tokenizer();

            await authService.createRecord({...tokens, _user_id: user._id });

            res.json(tokens);
        } catch (error) {
            next(error);
        }
    },

    refreshToken: async(req, res, next) => {
        try {
            const { _user_id, _id } = req.tokenInfo;

            const tokens = tokenizer();

            await authService.updateByID(_id, {...tokens, _user_id });

            res.json(tokens);
        } catch (error) {
            next(error);
        }
    }
}






//--------------------------------------------------------------------------------------------------------

// module.exports = {
//     userAuth: async(req, res, next) => {
//         try {
//             const { email, password } = req.body;

//             const user = await User.findOne({ email });// service

//             if (!user) {
//                 throw new Error('No user');
//             }

//             await passwordHellper.compare(password, user.password);

//             const tokens = tokenizer();

//             await Token_auth.create({...tokens, _user_id: user._id });// service

//             res.json(tokens);
//         } catch (error) {
//             next(error);
//         }
//     },

//     refreshToken: async(req, res, next) => {
//         try {
//             const { _user_id, _id } = req.tokenInfo;

//             const tokens = tokenizer();

//             await Token_auth.findByIdAndUpdate(_id, {...tokens, _user_id });// service

//             res.json(tokens);
//         } catch (error) {
//             next(error);
//         }
//     }
// }