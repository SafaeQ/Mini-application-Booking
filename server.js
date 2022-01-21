const express = require('express');
const router = require('./routes')
let bodyParser = require('body-parser')
const initial = require('./controllers/auth.controller')

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
    initial
});