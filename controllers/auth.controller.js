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

    user.save((err, user) => {
        if (err) {
            res.status(500).send(err.message)
            return;
        }
    })
}

module.exports = {
    signup
}