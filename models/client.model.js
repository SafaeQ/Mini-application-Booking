const mongoose = require('mongoose');
const Role = require('./role.model')
// define the name of model and its properties with mongoose
const Client = mongoose.model('Client',

    new mongoose.Schema({
        username: {
            type: String,
            default: null
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        },
        token: {
            type: String
        },
    }))
module.exports = Client;