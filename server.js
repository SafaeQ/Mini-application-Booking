const router = require('./routes')
const express = require('express');
const {
    mongoClient
} = require('mongodb')
const app = express();
const port = 8080;

const http = require('http').createServer(app);


// start the server at port 8080
http.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)

    mongoClient.connect('mongodb://localhost:8080', (err, client) => {

        let dbName = client.db('Booking App');
        console.log(` My Mongo Database ${dbName} is running `)
    })
});

app.use('/', router)