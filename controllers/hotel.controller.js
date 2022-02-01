const {
    models: {
        Hotel
    }
} = require('../models')
// 
const getAllHotels = async (req, res) => {
    const hotel = await Hotel
        .find({})
    if (!hotel)
        return res.status(400).send('Sorry We Can Not Get Your Request!')
    res.status(200).send(hotel)
}
// 
const get_single_Hotel = async (req, res) => {
    const id = req.params.id
    try {
        const hotel = await Hotel
            .findById(id)
            .catch(err => {
                throw err
            })
        res.status(200).send(hotel)
    } catch (error) {
        console.error(error)
    }
}
// 
const create_hotel = async (req, res) => {
    const hotel = new Hotel({
        name: req.body.name,
        ville: req.body.ville,
        date: req.body.date,
        stars: req.body.stars,
        image: req.body.image,
        adress: req.body.adress
    })

    try {
        const result = await hotel.save()
            .catch((err) => {
                throw err;
            })
        res.send(result);
    } catch (error) {
        console.error(error)
    }
}

const remove_hotel = async (req, res) => {
    const id = req.params.id
    let hotel;
    console.log(id);
    try {
        hotel = await Hotel.findByIdAndRemove(id)
            // await hotel.remove()ز
            .catch((error) => {
                throw error
            })

        res.status(200).json('Your Hotel has been removed successfully')
        // res.status(200).send('hotel is deleted')
    } catch (error) {
        console.error(error)
    }
}
// 
const update_hotel = async (req, res) => {
    let hotel;
    try {
        hotel = await Hotel.findById(req.params.id)
        hotel.name = req.body.name,
            hotel.ville = req.body.ville,
            hotel.date = req.body.date,
            hotel.stars = req.body.stars,
            hotel.image = req.body.image,
            hotel.adress = req.body.adress

        await hotel.save()
            .catch((err) => {
                throw err
            })
        res.status(200).send(hotel)
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