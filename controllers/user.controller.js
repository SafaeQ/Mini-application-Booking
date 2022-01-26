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

const remove_user = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndRemove(id)
            .catch(err => {
                console.error(err);
            })
        // res.status(200).send(user)
        res.status(200).json('Your Hotel has been removed successfully')
    } catch (error) {
        console.error(error)
    }
}
module.exports = {
    getAllUsers,
    get_single_user,
    remove_user
}