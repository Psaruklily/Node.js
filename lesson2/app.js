const express = require('express');
const app = express();

const expressHbs = require('express-handlebars');
const path = require('path');

let users = [
    { name: 'Lili', age: 24, gender: 'female' },
    { name: 'Oleh', age: 28, gender: 'male' },
    { name: 'Nastya', age: 10, gender: 'female' }
];

app.use(express.json()); //Node.js не вміє працювати з json, тому використовуємо дані методи express
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs'); //Це те, який двигун для відображення використовувати
app.engine('.hbs', expressHbs({ //Те, як працювати, коли зустрінуться такі налаштування
    defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static')); //Вказую, де власне мої вюшки лежать


app.get('/login', (request, response) => {
    response.render('login', { variable: true, name: "Lili" })
})

app.post('/login', (request, response) => {
    users.push(request.body)
        //response.json('Users registered!')
    response.redirect('/users')
})


app.get('/hello', (request, response) => {
    //response.send('World')
    response.write('World');
    response.end();
})

// app.get('/users', (request, response) => {
//     response.json([
//         { name: 'Lili' },
//         { name: 'Oleh' },
//         { name: 'Nastya' }
//     ])
// })

app.get('/users', (request, response) => {
    const { gender } = request.query;
    const filteredUsers = users.filter(user => user.gender === gender);
    response.render('users', { users: filteredUsers })
})

//Дістаємо id із query string
app.get('/users/:userId', (request, response) => {
    let { userId } = request.params;
    console.log(request.params);
    console.log(request.query);
    response.json(users[userId]);
})


app.listen(5000, () => {
    console.log('App listened 5000')
})