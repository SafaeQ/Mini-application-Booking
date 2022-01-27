const express = require('express');
const clientRouter = express.Router();

const {
    getAllClients,
    get_single_client,
    remove_client
} = require('../controllers/client.controller')

clientRouter.get('/clients', getAllClients)
clientRouter.get('/clients/:id', get_single_client)
clientRouter.delete('/clients/:id', remove_client)

module.exports = clientRouter