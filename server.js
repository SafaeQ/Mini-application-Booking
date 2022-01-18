const router = require('./routes')
const express = require('express');
const {
    MongoClient
} = require('mongodb')
const app = express();
const port = 8080;

const http = require('http').createServer(app);


// start the server at port 8080
http.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)

    MongoClient.connect('mongodb://127.0.0.1:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) throw err

        let db = client.db('Booking_App');
        console.log(` My Mongo Database Booking_App is running `)
    })
});

app.use('/', router)