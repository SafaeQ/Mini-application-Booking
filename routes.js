const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Lovely'
    })
})

router.get('/signup')

module.exports = router;