const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Lovely')
})

router.get('/signup')

module.exports = router;