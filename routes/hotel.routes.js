const express = require('express');
const hotelRouter = express.Router();
const {
    getAllHotels
} = require('../controllers/hotel.controller')

// my apis of CRUD hotel
hotelRouter.get('/hotels', getAllHotels)

module.exports = {
    hotelRouter
}