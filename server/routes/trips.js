const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../helpers/dbConnection');



router.use(function timelog(req, res, next) {
    console.log(`Time: `, Date.now(), 'index.js router');
    next();
});

router.post('/saveTrip', async (req, res, next) => {
    console.log(req.body)
    const tripName = req.body.tripName.toLowerCase()

    try {
        const results = await db.Trip.findAll({ where: { name: tripName } });
        if (results.length === 0) {
            try {
                await db.Trip.create({
                    name: req.body.tripName
                });
                res.status(201).send();

            } catch (error) {
                console.log(error);
            }
        } else {
            console.log(results)
            res.status(409).send()
        }
    
    }catch(error){console.log(error);}


    
    // res.send('hit')
});

router.get('/getTrips', async (req, res, next) => {
    try {
        const records = await db.Trip.findAll({ include: [{ model: db.Destination }] })
        res.send(records)
    } catch (error) {
        console.log(error)
    }
});

router.post('/trips/delete', async (req, res, next) => {
    const {id}  = req.body.id;
    console.log(id)
    try {
        await db.Trip.destroy({ where: { id: id } });
        const records = await db.Trip.findAll()
        res.status(200).send(records);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})



module.exports = router;