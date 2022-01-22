const jwt = require('jsonwebtoken')

// Create token
const userToken = (user) => {
    // const timestamp = new Date().getTime()
    return jwt.sign({
        user_id: user._id,
        email: user.email,
        // at: timestamp,
        role: user.role

    }, 'secret')
}

module.exports = {
    userToken
}