const User = require('../database/models/User');
const Token_auth = require('../database/models/Token_auth');

const { passwordHellper, tokenizer } = require('../helper');

module.exports = {
    userAuth: async(req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('No user');
            }

            await passwordHellper.compare(password, user.password);

            const tokens = tokenizer();

            await Token_auth.create({...tokens, _user_id: user._id });

            res.json(tokens);
        } catch (error) {
            res.json(error.message);

        }
    }
}