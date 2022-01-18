const express = require('express');
const app = express();
const port = 8080;
const http = require('http').createServer(app);

http.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`)
});