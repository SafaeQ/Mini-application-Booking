const express = require('express');
const authRouter = express.Router() //create new obj of router

// import functions of users from controller
const {
    auth_signup,
    auth_login
} = require('../controllers/auth.controller')

// console.log(auth_signup);

// my api for auth
authRouter.get('/signup', (req, res) => {
    // console.log('fd');
    // res.send('hello')
    res.render('auth/signup')
})
authRouter.post('/signup', auth_signup)
authRouter.post('/login', auth_login)

module.exports = authRouter