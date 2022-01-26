const {
    models: {
        Hotel
    }
} = require('../models')

const getAllHotels = async (req, res) => {
    const {
        name,
        ville,
        date,
        stars,
        price,
        images
    } = req.body;
}