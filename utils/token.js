const jwt = require('jsonwebtoken')

// Create token
const token = (user) => {
    return jwt.sign({
        user_id: user._id,
        email: user.email,
        roles: user.roles

    }, 'secret')
}

module.exports = {
    token
}