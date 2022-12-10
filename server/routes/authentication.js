const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../helpers/dbConnection')


router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'index.js router');
    next();
});

router.get('/yelpCall', (req, res, next) => {
    
    
    // res.send('hit')
});

module.exports = router;