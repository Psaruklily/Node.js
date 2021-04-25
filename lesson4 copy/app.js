const express = require('express');
const apiRouter = require('./router/api.router');
const mongoose = require('mongoose');

const app = express();

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    res.send('hello')
})

app.use('/', apiRouter);


app.listen(5000, () => {
    console.log('Server running on localhost 5000');
})

function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/nodeLearn', { useNewUrlParser: true, useUnifiedTopology: true });

    const connection = mongoose.connection;

    connection.on('error', (error) => {
        console.log(error);
    })
}