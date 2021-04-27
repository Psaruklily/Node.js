const router = require('express').Router();
const User = require('../database/models/User');
const { passwordHellper } = require('../helper');

router.post('/', async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('No user');
    }

    await passwordHellper.compare(password, user.password);

    res.json('OK');
})


module.exports = router;