const express = require('express');
const hotelRouter = express.Router();
const {
    getAllHotels,
    get_single_Hotel,
    create_hotel,
    remove_hotel,
    update_hotel
} = require('../controllers/hotel.controller')
const upload = require('../middlewares/multer')


// my apis of CRUD hotel
hotelRouter.get('/hotels', getAllHotels)
hotelRouter.get('/hotels/:id', get_single_Hotel)
hotelRouter.post('/hotel', upload.array('images', 12), (req, res) => {
    console.log(req.files);
    res.send(req.files)
})
hotelRouter.delete('/hotels/:id', remove_hotel)
hotelRouter.put('/hotels/:id', update_hotel)
module.exports = {
    hotelRouter
}