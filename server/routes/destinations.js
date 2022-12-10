const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../helpers/dbConnection");

router.use(function timelog(req, res, next) {
  console.log(`Time: `, Date.now(), "index.js router");
  next();
});

router.post("/destinations", async (req, res, next) => {
  console.log(req.body);
  await db.Destination.create({
    tripID: req.body.tripID,
    name: req.body.name,
    dayCode: req.body.dayCode,
    notes: req.body.notes,
    // lat: req.body.lat,
    // lng: req.body.lng,
    phone: req.body.phone,
    url: req.body.url,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
  });

  // res.send('hit')
});

router.get("/destinations/:tripID/:dayCode", async (req, res, next) => {
  const { tripID, dayCode } = req.params;
  console.log(dayCode);
  console.log(req.params);
  try {
    const records = await db.Destination.findAll({
      where: { tripID: tripID, dayCode: dayCode },
    });
    console.log('here are the destinations', records);
    res.send(records);
  } catch (error) {
    console.log(error);
  }
});

router.post("/destinations/delete", async (req, res, next) => {
  const { destinationID, dayID } = req.body;
  console.log(destinationID);
  try {
      await db.Destination.destroy({ where: { id: destinationID } });
    const records = await db.Destination.findAll({ where: { dayCode: dayID } })
    console.log(records)
    res.status(200).send(records);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
