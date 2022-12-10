const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../helpers/dbConnection')


router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'index.js router');
    next();
});

router.post('/yelpcall', async (req, res, next) => {
    // res.send('api works')
    console.log('posted to yelp call');
    const { term, location } = req.body;
    
    try {
        let response = await axios.get(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=50`,
            {
                headers: {
                    Authorization: process.env.YELP_KEY
                }
            }
        );
        console.log(response.data);
        res.send(response.data.businesses)
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
    // const resJson = response.JSON()
    // res.send(resJson)
    // console.log(response);
    
});

router.get('/yelpCall', (req, res, next) => {
    
    
    // res.send('hit')
});

module.exports = router;