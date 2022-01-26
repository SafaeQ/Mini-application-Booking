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
        images
    } = req.body;

    try {
        const hotel = await Hotel
            .find({
                name: name,
                ville: ville,
                date: date,
                stars: stars,
                images: images
            })
            .catch((e) => {
                throw e;
            })
        res.status(200).send(hotel)
    } catch (error) {
        console.error(error)
    }

}

const get_single_Hotel = async (req, res) => {
    const _id = req.params
    try {
        const hotel = await Hotel
            .findById({
                where: {
                    id: _id
                }
            })
            .catch(err => {
                throw err
            })
        res.status(200).send(hotel)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAllHotels,
    get_single_Hotel
}