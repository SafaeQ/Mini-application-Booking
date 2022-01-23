const express = require('express');
const authRouter = express.Router() //create new obj of router
const passport = require('passport');
require('../middlewares/passport')

// import functions of users from controller
const {
    auth_signup,
    auth_login
} = require('../controllers/auth.controller')

// console.log(auth_signup);

// passport
const requireSignIn = passport.authenticate('local', {
    session: false,
    // successRedirect: '/',
    // failureRedirect: '/test',
})

// my api for auth
authRouter.get('/signup', (req, res) => {
    // console.log('fd');
    // res.send('hello')
    res.render('auth/signup')
})
authRouter.post('/signup', auth_signup)

authRouter.get('/login', (req, res) => {
    res.render('auth/signin')
})
authRouter.post('/login', requireSignIn, auth_login)

module.exports = authRouter