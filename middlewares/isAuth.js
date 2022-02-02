const jwt = require('jsonwebtoken')

const isAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, 'secret')
        const user_id = decoded.user_id
        if (req.body.user_id && req.body.user_id !== user_id) {
            throw 'invalid user id'
        } else {
            next()
        }
    } catch (error) {
        res.status(401).json({
            error: new Error('Invalid request')
        })
    }
}
module.exports = {
    isAuth
}