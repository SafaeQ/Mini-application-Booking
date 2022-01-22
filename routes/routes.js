const express = require('express');
const router = express.Router(); //create new obj of router

// import functions of users from controller
const {
    auth_signup,
    auth_login
} = require('../controllers/auth.controller')

// test
router.get('/', function (req, res) {
    // res.json({
    //     status: 'API is working',
    //     message: 'Lovely'
    // })
    res.render('index')
})

// my api
router.post('/signup', auth_signup)
router.post('/login', auth_login)

module.exports = router;