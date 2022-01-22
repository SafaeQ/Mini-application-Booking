const mongoose = require('mongoose');

// define the name of model and its properties with mongoose
const User = mongoose.model('User',

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
        roles: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        },
        token: {
            type: String
        },
    }))
module.exports = User;