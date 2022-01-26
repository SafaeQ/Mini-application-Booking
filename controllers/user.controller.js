const {
    models: {
        User
    }
} = require('../models')

const getAllUsers = async (req, res) => {
    try {
        const user = await User.find({})
            .catch((e) => {
                throw e
            })
        res.status(200).send(user)
    } catch (error) {
        console.error(error)
    }
}