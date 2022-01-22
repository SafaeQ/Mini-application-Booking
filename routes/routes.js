const express = require('express');
const router = express.Router(); //create new obj of router

// test
router.get('/', function (req, res) {
    // res.json({
    //     status: 'API is working',
    //     message: 'Lovely'
    // })
    res.render('index')
})

module.exports = router;