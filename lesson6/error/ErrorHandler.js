module.exports = class ErrorHandler extends Error {
    constructor(status, customCode, message = '') {
        super(message);
        this.status = status;
        this.customCode = customCode; //4001, 40012

        Error.captureStackTrace(this, this.constructor);
    }
}