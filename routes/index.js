var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();

// Handle get and post requests here
router.get('/', (req, res, next) => {
    res.render('index.njk');
});


module.exports = router;



