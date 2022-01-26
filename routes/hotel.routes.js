const express = require('express');
const hotelRouter = express.Router();
const {
    getAllHotels,
    get_single_Hotel,
    create_hotel,
    remove_hotel,
    update_hotel
} = require('../controllers/hotel.controller')
const {
    getAllUsers,
    get_single_user
} = require('../controllers/user.controller')

// my apis of CRUD hotel
hotelRouter.get('/hotels', getAllHotels)
hotelRouter.get('/users', getAllUsers)
hotelRouter.get('/hotels/:id', get_single_Hotel)
hotelRouter.get('/users/:id', get_single_user)
hotelRouter.post('/hotel', create_hotel)
hotelRouter.delete('/hotels/:id', remove_hotel)
hotelRouter.put('/hotels/:id', update_hotel)
module.exports = {
    hotelRouter
}