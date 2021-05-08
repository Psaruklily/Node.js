const { emailActionEnum } = require('../constatnt');

module.exports = {
    [emailActionEnum.WELCOME]: {
        templateName: 'welcome',
        subject: 'Welcome on board'
    },

    [emailActionEnum.USER_BLOCKED]: {
        templateName: 'user-blocked',
        subject: 'Your account was blocked'
    },

    [emailActionEnum.PASSWORD_CHANGED]: {
        templateName: 'zz',
        subject: 'Password was changed'
    }
}