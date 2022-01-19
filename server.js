const router = require('./routes')
const express = require('express');
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}))
const http = require('http').createServer(app);


// start the server at port 8080
http.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
    con = 'mongodb://127.0.0.1:27017'
    MongoClient.connect(con, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) throw err

        const db = client.db('Booking_App');
        console.log(` My Mongo Database Booking_App is running `)
    })
});

app.use('/', router)