const express = require('express');
const app = express();

const fs = require('fs');

const path = require('path');

const expressHbs = require('express-handlebars');

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static'));


app.get('/', (request, response) => {
    response.redirect('/login')
})

//-----------------------------------------------------------------------------------LOGIN

let isValid = false

app.get('/login', (request, response) => {
    response.render('login', { isValid })
    isValid = false
})

app.post('/login', (request, response) => {

    fs.readFile(__dirname + '/users.json', (error, data) => {
        if (error) throw error;
        let fileUsers = JSON.parse(data.toString());
        console.log(fileUsers)
        for (let user of fileUsers) {
            if (request.body.email === user.email && request.body.password === user.password) {
                return response.send(user)
            }
            if (request.body.email !== user.email || request.body.password !== user.password) {
                isValid = true;
                return response.redirect('/login')
            }
        }
    })
})

//-----------------------------------------------------------------------------------GET ALL REGISTERED USERS
app.get('/users', (request, response) => {
    let res = fs.readFile(__dirname + '/users.json', (err, data) => {
        err ? Function("error", "throw error")(err) : response.send(JSON.stringify(JSON.parse(data)));
    })
})

//-----------------------------------------------------------------------------------SIGN UP
app.get('/signUp', (request, response) => {
    response.render('signUp')
})

app.post('/signUp', (request, response) => {
    fs.readFile(__dirname + '/users.json', (error, data) => {
        if (error) throw error;
        let fileUsers = JSON.parse(data.toString());
        fileUsers.push(request.body);

        let returnJson = JSON.stringify(fileUsers);

        fs.writeFile(__dirname + '/users.json', returnJson, (error) => {
            if (error) throw error;
        })
        response.send(request.body)
    })
})


app.listen(5000, () => {
    console.log('Server running on 5000')
})