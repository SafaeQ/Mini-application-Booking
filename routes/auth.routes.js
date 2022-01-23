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
    // successRedirect: '/views/test',
    // failureRedirect: '/',
})

// my api for auth
authRouter.get('/signup', (req, res) => {
    // console.log('fd');
    // res.send('hello')
    res.render('auth/signup')
})
authRouter.post('/signup', requireSignIn, auth_signup)
authRouter.post('/login', auth_login)

module.exports = authRouter