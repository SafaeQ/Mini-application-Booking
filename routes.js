const express = require('express');
const router = express.Router();

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