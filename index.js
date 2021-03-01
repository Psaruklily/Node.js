// const http = require('http');
// const port = 3000;
// const path = '127.0.0.1';

// let message = 'Hello, wold';

// let server = http.createServer((request, response) => {
//     console.log(message);
//     response.end(message);
// })

// server.listen(port, path, () => {
//     console.log(`Server running http://${path}:${port}`)
// })

//===========================================================

// let EventEmitter = require('events').EventEmitter;

// let dispatcher = new EventEmitter();
// dispatcher.on('connect', function(data) {
//     console.log('connect 1', data)
// })

// dispatcher.on('connect', function(data) {
//     console.log('connect 2', data)
// })

// dispatcher.on('error', function(err) {
//     console.log('My custom error')
// })

// dispatcher.emit('error', new Error('Something went wrong'))
// dispatcher.emit('connect', { foo: 1 })

//=======================================================================================

// const width = process.argv[2];
// const height = process.argv[3];

// function getRectArea() {
//     if (isNaN(width) || isNaN(height)) {
//         throw 'Parameter is not a number!'
//     }
//     console.log('Everything is ok!')
// }

// try {
//     getRectArea()
// } catch (e) {
//     console.log(e);
// }

//============================================ РОБОТА ІЗ ФАЙЛАМИ-------------------------------

// let fs = require('fs');
// fs.readFile('hello.txt', 'utf8', function(error, data) {
//     console.log('Async reading');
//     if (error) throw error;
//     console.log(data);
// })

// let fileContent = fs.readFileSync('hello.txt', 'utf8')
// console.log(fileContent)


//==============

// fs.writeFile('hello.txt', 'Hello, Lili', function(error) {
//     if (error) throw error;
//     console.log('Дані записано до файлу. Вміст файлу:');
//     let data = fs.readFileSync('hello.txt', 'utf8')
//     console.log(data);
// });

// fs.appendFileSync('hello.txt', 'Hello, Oleh! ');
// fs.appendFile('hello.txt', 'Hello, Nastya! ', (error) => {
//     if (error) throw error;
//     console.log('Асихронно дописую');
//     let data = fs.readFileSync('hello.txt', 'utf8');
//     console.log('Остаточний вміст файлу:', data);
// })


//По зненерованій події видалити файл
// const EventEmitter = require('events').EventEmitter;
// let ev = new EventEmitter;
// ev.on('click', function() {
//     console.log('event happened')
//     fs.unlink('hello.txt', () => {
//         console.log('File was delited')
//     });
// })

// ev.emit('click')

//======================================

// const EventEmitter = require('events');
// const util = require('util');

// function User() {}

// util.inherits(User, EventEmitter)

// User.prototype.sayHello = function(data) {
//     this.emit('click', data)
// }

// let user = new User;
// user.on('click', function(data) {
//     console.log(data);
// })

// user.sayHello('Hello')

//------------------------------------------------------------------------  

// const EventEmitter = require('events');
// class User extends EventEmitter {
//     sayHello(data) {
//         this.emit('click', data)
//     }
// }

// let user = new User;
// user.on('click', function(data) {
//     console.log(data)
// })

// user.sayHello('Hello lili')

//========================================================

// const http = require('http');
// const fs = require('fs');
// const port = 3000;
// const path = '127.0.0.1';

// http.createServer(function(request, response) {
//     const filePath = request.url.substr(1);
//     fs.readFile(filePath, 'utf-8', (error, data) => {
//         if (error) {
//             response.statusCode = 404;
//             response.end('Resource not found');
//         } else {
//             response.end(data);
//         }
//     })
// }).listen(port, path, () => {
//     console.log(`Server running http://${path}:${port}/`)
//     console.log(`Greeting: http://${path}:${port}/greeting.html`)
// })

//==========================================================================================

const http = require('http');
const { URL } = require('url');

http.createServer((request, response) => {
    const myURL = new URL(`http://127.0.0.1:3000${request.url}`);
    console.log(myURL);
    let params = myURL.searchParams.get('q');
    response.end(params);
}).listen(3000, '127.0.0.1', () => {
    console.log(`Server running http://127.0.0.1:3000`);
})