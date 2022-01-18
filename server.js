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

    MongoClient.connect('mongodb://localhost:27017', (err, client) => {

        let dbName = client.db('Booking_App');
        console.log(` My Mongo Database ${dbName} is running `)
    })
});

app.use('/', router)