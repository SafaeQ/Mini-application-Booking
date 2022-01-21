const express = require('express');
let bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express();
const port = 8080;
const router = require('./routes')

//  parses urlencoded bodies and only looks at requests
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/', router)



// start the server at port 8080
app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
});