const express = require('express');
const router = express.Router(); //create new obj of router

const {
    signup,
    signin
} = require('./controllers/auth.controller')

router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Lovely'
    })
})

router.post('/signup', signup)
router.post('/login', signin)

module.exports = router;