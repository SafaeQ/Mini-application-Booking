const mongoose = require('mongoose');

// Create the schema for the user model
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