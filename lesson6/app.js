const express = require('express');
const apiRouter = require('./router/api.router');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.use('*', (error, req, res, next) => {
    // res
    //     .status(status)
    //     .json({
    //        code: error.customCode
    //     });

    const status = error.status || 500;

    res
        .status(status)
        .json({
            customCode: error.customCode,
            message: error.message
        });
});


app.listen(5000, () => {
    console.log('Server running on localhost 5000');
});

function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/nodeLearnHomework4', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

    const connection = mongoose.connection;

    connection.on('error', (error) => {
        console.log(error);
    })
}