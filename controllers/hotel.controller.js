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

const create_hotel = async (req, res) => {
    const {
        id,
        name,
        ville,
        date,
        stars,
        image,
        adress
    } = req.body;
    try {
        const result = await Hotel
            .create({
                data: {
                    id,
                    name,
                    ville,
                    date,
                    stars,
                    image,
                    adress
                },
            })
            .catch((err) => {
                throw err;
            })
        res.send(result);
    } catch (error) {
        console.error(error)
    }
}

const remove_hotel = async (req, res) => {
    const {
        id
    } = req.body;
    try {
        const result = await Hotel
            .delete({
                where: {
                    id: _id
                }
            })
            .catch((error) => {
                throw error
            })
        if (result.count === 1) {
            res.status(200).json('Your Hotel has been removed successfully')
        } else {
            res.status(200).json('no hotel found!')
        }
    } catch (error) {
        console.error(error)
    }
}

const update_hotel = async (req, res) => {
    const {
        _id
    } = req.body;
    const data = {
        name: req.body.name,
        ville: req.body.ville,
        date: req.body.date,
        stars: req.body.stars,
        image: req.body.image,
        adress: req.body.adress,
    }
    try {
        const result = await Hotel
            .findByIdAndUpdate({
                where: {
                    id: _id
                },
                data
            })
            .catch((err) => {
                throw err
            })
        res.status(200).send(result)
    } catch (error) {
        console.error(error)
    }
}
module.exports = {
    getAllHotels,
    get_single_Hotel,
    create_hotel,
    remove_hotel,
    update_hotel
}