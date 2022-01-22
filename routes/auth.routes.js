const express = require('express');
const authRouter = express.Router() //create new obj of router

// import functions of users from controller
const {
    auth_signup,
    auth_login
} = require('../controllers/auth.controller')


// my api for auth
authRouter.get('/auth/signup', (req, res) => {
    // res.send('hello')
    res.render('/auth/signup')
})
authRouter.post('/auth/signup', auth_signup)
authRouter.post('/login', auth_login)

module.exports = authRouter