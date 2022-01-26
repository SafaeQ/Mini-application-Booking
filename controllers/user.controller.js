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

const get_single_user = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
            .catch((err) => {
                throw err
            })
        res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getAllUsers,
    get_single_user
}