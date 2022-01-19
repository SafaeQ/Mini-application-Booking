const express = require('express');
const router = express.Router();

const {
    signup
} = require('./controllers/auth.controller')

router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Lovely'
    })
})

router.get('/signup', signup)

module.exports = router;