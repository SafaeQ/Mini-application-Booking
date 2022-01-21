const {
    models: {
        User,
        Role
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
            password,
            roles
        } = req.body;
        // validation 
        if (!(email && password && username && roles)) {
            res.status(400).send('oh oh')
        }

        // encrypt password
        let encryptedPassword = await bcrypt.hash(password, 10)

        // create user in db
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
            roles
        })

        // Create token
        const token = jwt.sign({
                user_id: user._id,
                email: user.email,
                password: user.id,
                roles: user.roles
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

// function initial() {
//     Role.countDocuments((err, count) => {
//         if (!err && count === 0) {
//             new Role({
//                 name: 'admin'
//             }).save(err => {
//                 if (err) throw err
//                 console.log('add "admin" to roles');
//             });
//             new Role({
//                 name: 'user'
//             }).save(err => {
//                 if (err) throw err
//                 console.log('add "user" to roles');
//             })
//             new Role({
//                 name: 'particular'
//             }).save(err => {
//                 if (err) throw err
//                 console.log('add "particular" to roles')
//             })
//         }
//     })
// }