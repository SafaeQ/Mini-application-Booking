const jwt = require('jsonwebtoken')
const {
    models: {
        User
    }
} = require('../models')

const isAuth = (req, res, next) => {
    User.findById(id.session.user_id).exec(function (err, user) {
        if (err) {
            return next(err)
        } else {
            if (user === null) {
                let err = new Error('not authorized')
                err.status = 401
                return next(err)
            } else {
                return next()
            }
        }
    })
}
module.exports = {
    isAuth
}