const {
    models: {
        Client
    }
} = require('../models')

const getAllClients = async (req, res) => {
    try {
        const client = await Client.find({})
            .catch((e) => {
                throw e
            })
        res.status(200).send(client)
    } catch (error) {
        console.error(error)
    }
}

const get_single_client = async (req, res) => {
    const id = req.params.id
    try {
        const client = await Client.findById(id)
            .catch((err) => {
                throw err
            })
        res.status(200).send(client)
    } catch (error) {
        console.log(error);
    }
}

const remove_client = async (req, res) => {
    const id = req.params.id
    try {
        const client = await Client.findByIdAndRemove(id)
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
    getAllClients,
    get_single_client,
    remove_client
}