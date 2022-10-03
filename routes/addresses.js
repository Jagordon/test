const express = require('express');
var router = express.Router();
const api = require('../utils/api');

router.get('/addresses', (req, res, next) => {
    res.render('addresses.njk');
});

router.post('/addresses', (req, res, next) => {
    api(req.body.postcode).then(response => {
        res.render('addresses', { addresses: response.data?.results });
    }).catch(error => {
        res.send(error.message);
    })
});

module.exports = router;