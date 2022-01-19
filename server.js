const router = require('./routes')
const express = require('express');
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

const app = express();
const port = 8080;
const http = require('http').createServer(app);

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json)

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true
});

let db = mongoose.Connection;

if (!db) console.log('Error with connection')
else console.log('My Mongo Database Booking_App is running')


// start the server at port 8080
http.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
});

app.use('/', router)