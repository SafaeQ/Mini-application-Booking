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

// static files => to serve this files
app.use(express.static('assets'))
app.use('/css', express.static(__dirname + 'asset/css'))

// set template engine
app.use(expressLayouts)
app.set('layout', 'layouts/layout.ejs')
app.set('view engine', 'ejs') //declare that we're using ejs
app.set('views', 'views') // spicify with directory

app.use('/', router)

// start the server at port 8080
app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
});