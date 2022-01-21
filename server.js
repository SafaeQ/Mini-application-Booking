const express = require('express');
const router = require('./routes')
let bodyParser = require('body-parser')


const app = express();
const port = 8080;

//  parses urlencoded bodies and only looks at requests
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/', router)



// start the server at port 8080
app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
    initial()
});


// Initialize
const db = require('./models')
const Role = db.role;

function initial() {
    Role.count((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: 'admin'
            }).save(err => {
                if (err) throw err
                console.log('add "admin" to roles');
            });
            new Role({
                name: 'user'
            }).save(err => {
                if (err) throw err
                console.log('add "user" to roles');
            })
            new Role({
                name: 'particular'
            }).save(err => {
                if (err) throw err
                console.log('add "particular" to roles')
            })
        }
    })
}