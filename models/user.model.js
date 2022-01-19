const mongoose = require('mongoose');

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
        roles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        }],
        token: {
            type: String
        },
    }))
module.exports = User;