module.exports = {
    TOO_WEAK_PASSWORD: {
        customCode: 4001
    },

    ID_NOT_VALID: {
        customCode: 4002
    },

    WRONG_EMAIL_OR_PASSWORD: {
        customCode: 4003
    },

    NO_TOKEN: {
        customCode: 4004
    },

    //UNAUTHORIZED
    WRONG_TOKEN: {
        customCode: 4001
    },

    RECORD_NOT_FOUND: {
        customCode: 40041
    },

    USER_BLOCKED: {
        customCode: 40038
    },
};

//PSEUDO CODE FOR FRONTENDER

// const codesToMessage = {
//   4001: {
//     en: 'Too weak password',
//     fr: 'Password is not good'
//   }
// };

// const customCode = res.data.customeCode;

// codesToMessage[customCode][userLang];