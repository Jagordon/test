const express = require('express');
var router = express.Router();
const api = require('../utils/api');
// Handle get and post requests here
router.get('/addresses', (req, res, next) => {
    res.render('addresses.njk');
});

router.post('/addresses', async (req, res, next) => {
    
        await api(req.body.postcode).then(response => {
            res.render('addresses', { addresses: response.data?.results });
        }).catch(error => {
            res.send(error.message);
        })
    
});

module.exports = router;