const {
    User,
    Role
} = require('../models')
const jwt = require('jsonwebtoken')

const signup = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
}

module.exports = {
    signup
}