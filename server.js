const router = require('./routes')
const express = require('express');
let bodyParser = require('body-parser')

// let mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017', {
//     useNewUrlParser: true
// });

const app = express();
const port = 8080;
//const http = require('http').createServer(app);

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


// let db = mongoose.Connection; 

// if (!db) console.log('Error with connection')
// else console.log('My Mongo Database Booking_App is running')

app.use('/', router)

// start the server at port 8080
app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
});