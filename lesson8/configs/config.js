require('dotenv').config({ path: process.cwd() + '/.env' });

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'REFRESH SECRET',
    PORT: 5000,

    ROOT_EMAIL: process.env.ROOT_EMAIL || 'testmail@gmail.com',
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '12345'
}