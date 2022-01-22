const {
    models: {
        User,
        Role
    }
} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {
    userToken
} = require('../utils/token')

const signup = async (req, res, next) => {

    // get user 
    const {
        username,
        email,
        password,
        roles
    } = req.body;

    // validation 
    if (!(email || !password)) {
        return res.status(400).send({
            error: 'Please full all fields and try again'
        })
    }

    // check if there is any user already in db
    // ****************************
    // const checkExistingUser = await User.find({
    //     where: {
    //         email: email,
    //     }
    // })

    // if (checkExistingUser) {
    //     return res.status(400).send({
    //         error: 'hey u this is not ur email...'
    //     })
    // }

    try {
        // encrypt password
        let encryptedPassword = await bcrypt.hash(password, 10)

        // create user in db
        const user = await User.create({
                username,
                email: email.toLowerCase(),
                password: encryptedPassword,
                roles
            })
            .catch((err) => {
                throw err
            })

        console.log(user)
        return res.json({
            token: userToken(user)
        })

        // save user token
        user.token = token;

        // return new user
        res.send(user);
        // res.status(200).json(user)

    } catch (error) {
        console.error(error)
    }
    // res.render('auth/signup.ejs')
}

const signin = async (req, res) => {

    try {
        // get user
        const {
            email,
            password
        } = req.body;

        //  get user from db by email
        const user = await User.findOne({
            email
        });

        // encrypt password
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign({
                    user_id: user._id,
                    email
                },
                "secret", {
                    expiresIn: "1h",
                }
            )

            // save user token
            user.token = token;
            // if the request has succeeded
            res.status(200).json(user);
        }

        // Bad Request 
        res.status(400).send("Invalid Credentials");
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    signup,
    signin
}