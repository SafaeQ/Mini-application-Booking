const express = require('express');
const userRouter = express.Router();

const {
    getAllUsers,
    get_single_user,
    remove_user
} = require('../controllers/user.controller')

userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', get_single_user)
userRouter.delete('/users/:id', remove_user)

module.exports = userRouter