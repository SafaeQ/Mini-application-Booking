const passport = require('passport')
const LocalStrategy = require('passport-local')
const {
    models: {
        User
    }
} = require('../models')

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    async (email, password, done) => {
        try {
            const user = await User.findOne({
                where: {
                    email: email
                }

            })
            console.log(user);
            // if (err) return done(err);s
            if (!user) return done(null, false, {
                message: 'incorrect email'
            })
            // if (!user.verifyPassword(password)) return done(null, false)
            return done(null, user)

        } catch (error) {
            console.error(error)
        }

    }
));