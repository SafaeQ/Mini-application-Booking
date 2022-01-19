const {
    models: {
        User
    }
} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (req, res, next) => {

    try {
        // get user 
        const {
            username,
            email,
            password
        } = req.body;
        // validation 
        if (!(email && password && username)) {
            res.status(400).send('okay')
        }


        // encrypt password
        let encryptedPassword = await bcrypt.hash(password, 10)

        // create user in db
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
        })
        // Create token

        const token = jwt.sign({
                user_id: user._id,
                email: user.email,
                password: user.id
            },
            "secret", {
                expiresIn: "1h",
            }
        );
        // save user token
        user.token = token;
        // return new user
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    signup
}