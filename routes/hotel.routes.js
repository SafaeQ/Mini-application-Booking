const express = require('express');
const hotelRouter = express.Router();
const {
    getAllHotels,
    get_single_Hotel,
    create_hotel
} = require('../controllers/hotel.controller')

// my apis of CRUD hotel
hotelRouter.get('/hotels', getAllHotels)
hotelRouter.get('/hotels/:id', get_single_Hotel)
hotelRouter.post('/hotel', create_hotel)
module.exports = {
    hotelRouter
}