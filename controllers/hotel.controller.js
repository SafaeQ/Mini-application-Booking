const {
    models: {
        Hotel
    }
} = require('../models')
const multer = require('multer')
const path = require('path')

// set distination of the img
const storage = multer.diskStorage({
    destination: '../assets/images',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now()
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
}).array('photos', 12)
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
    upload(req, res, (err) => {
        if (err) {
            res.status(500).send('something went wrong')
        } else {
            console.log(req.files);
            // res.send('test')
        }
    })
    const {
        name,
        ville,
        date,
        stars,
        image,
        adress
    } = req.body
    const hotel = new Hotel({
        name: name,
        ville: ville,
        date: date,
        stars: stars,
        image: image,
        adress: adress
    })

    const result = await hotel.save()
    if (!result) return res.status(400).send("Sorry Hotel Does Not Added!");
    res.send('Hotel added successfully!' + result);

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