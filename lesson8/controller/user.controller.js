const path = require('path');
const uuid = require('uuid').v1;
const fs = require('fs-extra').promises;

const { userService, emailService } = require('../service');
const { passwordHellper } = require('../helper');
const { emailActionEnum } = require('../constatnt');

module.exports = {
    getAllUsers: async(req, res, next) => {
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    getUserByID: async(req, res, next) => {
        try {
            const { userId } = req.params;
            const userByID = await userService.findUserByID(userId);
            res.json(userByID);
        } catch (error) {
            next(error);
        }
    },

    signUp: async(req, res, next) => {
        try {
            const { body: { password, email }, avatar } = req;

            const hashPassword = await passwordHellper.hash(password);

            const user = await userService.createUser({...req.body, password: hashPassword });

            if (avatar) {
                const pathWithoutStatic = path.join('user', `${user._id}`, 'photos');
                const photoDir = path.join(process.cwd(), 'static', pathWithoutStatic);
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid()}.${fileExtension}`;
                const finalPhotoPath = path.join(photoDir, photoName);

                // console.log('********************************')
                // console.log(finalPhotoPath)
                // console.log('********************************')

                await fs.mkdir(photoDir, { recursive: true });
                await avatar.mv(finalPhotoPath);

                await userService.updateUserByID(user._id, { avatar: path.join(pathWithoutStatic, photoName) });
            }

            await emailService.sendMail(email, emailActionEnum.WELCOME, { userName: email });

            res.json(user);
        } catch (error) {
            next(error);
        }
    },

    deleteUser: async(req, res, next) => {
        try {
            const { userId } = req.params;

            if (userId !== req.user._id.toString()) {
                throw new Error('Unauthorized');
            }

            // console.log('*********************************************');
            // console.log(req.user);
            // console.log('*********************************************');

            res.json(`${userId} is deleted`);
        } catch (error) {
            next(error);
        }
    }
}