const mongoose = require('mongoose');

const Hotel = mongoose.model('Hotel',
    new mongoose.Schema({
        name: {
            type: String,
            default: null,
        },
        ville: {
            type: String,
            default: null,
        },
        date: {
            type: Date,
            default: null,
        },
        stars: {
            type: Number,
            default: null,
        },

        images: [{
            data: Buffer,
            type: String,
            default: null,
        }],
        adress: {
            type: String,
            default: null,
        },
    })
)
module.exports = Hotel