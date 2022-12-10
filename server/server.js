//libraries
const cookieParser = require('cookie-parser');
const session = require('express-session')
const path = require('path')
const express = require('express');
require('dotenv').config()
const cors = require('cors');
const fetch = require('node-fetch')
const axios = require('axios');
// import  fetch  from 'node-fetch'


const app = express();

const port = process.env.PORT || 3003;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(cookieParser());
// app.use(
//     session(
//         {
//             secret: process.env.SECRET,//sign cookie
//             resave: false, //update session even when no changes
//             saveUninitialized: true, //always create a session
//             cookie: {
//                 secure: false, //true only takes http reqs
//                 maxAge: 1000 * 60 * 60 * 24 //time in seconds
//             }
//         }
//     )
// );

//scrape email and password form request header using html form
app.use(express.urlencoded({ extended: true }));

//scrape email and password form request header using Postman api
app.use(express.json());

//setup public folder
app.use(express.static('./public'));

app.use(require('./routes/authentication.js'))
app.use(require('./routes/yelpCall.js'));
app.use(require('./routes/destinations.js'));
app.use(require('./routes/trips.js'));

app.get('/getDestinations/:tripID:day', async (req, res, next) => {
    const { tripID, day } = req.params;
    console.log(req.params)
    try {
        const records = await db.Destination.findAll({ where:{tripID:tripID, day:day} })
        res.send(records)
    } catch (error) {
        console.log(error)
    }
})

app.get('*', (req, res, next) => {
    console.log("get catch all hit");
    res.send('catchall')
    // req.session.destroy();
    // if (!req.session) { console.log('user logged out'); }
    // return res.redirect('/');
});
app.post('*', (req, res, next) => {
    // req.session.destroy();
    console.log("post catch all hit");
    // if (!req.session) { console.log('user logged out'); }
    return res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server is running at Port: ${port}`);
});