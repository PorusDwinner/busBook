const express = require('express');
const withDB = require('../withDB/withDB');

const router = express.Router();

// GET ALL DOCUMENTS FROM 'TRIPS' COLLECTION
router.get('/api/bus-data' , async(req , res) => {
    withDB(async(db) => {
        let tripsData = await db.collection('TRIPS').find({}).toArray();
        res.json(tripsData);
    },res)
    .then(() => console.log('All Trips data send to frontend'))
    .catch((err) => console.log('Failed to send data to forntend',err));
});

// SEND BOOKING DETAILS TO DB
router.post('/api/booking-details', (req , res) => {
    withDB(async(db) => {
        await db.collection('BOOKINGS').insertMany(req.body)
    })
    .then(() =>  res.json('Booking Saved'))
    .catch((err) => res.json('Failed to save booking details'));
});

// CHECK IF USER EXIST IN DB FOR LOGIN FUNCTIONALITY
router.get('/api/check/:username/:password', (req , res) => {
    console.log('check user api triggered')

    withDB( async(db) => {
        const allUsers = await db.collection('USER').find().toArray();
        const filteredUser = allUsers.filter((ele) => ele.name === req.params['username'])
        if(filteredUser[0].password === req.params['password']) res.json('verified')
        else res.json('not verified')
    },res)
});

// ADD NEW USER IN DB
router.get('/api/add-user/:userName/:email/:password/:mobile', (req , res) => {

    withDB( async(db) => {
        await db.collection('USER').insertOne({
            name : req.params['userName'],
            email : req.params['email'],
            password : req.params['password'],
            mobile : req.params['mobile'],
        })
        .then(() => {
            res.json(`${req.params['userName']} added`);
            console.log(`${req.params['userName']} added`)
        })
        .catch(() => res.json('Failed to add data'))
    })
});

// ALL TICKETS DETAILS OF THE USER

router.get('/api/tickets/:username' , (req ,res) => {
    console.log('username recieved through param :',req.params['username']);
    let allTickets;
    withDB( async(db) => {
        allTickets = await db.collection('BOOKINGS')
        .find({ account : req.params['username'] })
        .toArray();
        
        res.json(allTickets);
    })
    .then(() => console.log('All tickets sent'))
    .catch((err) => console.log('failed to sent',err));
});

module.exports = router;

// // FIND ALL BOOKED DETAILS OF THE USER
// router.get('/api/find-tickets/:username', (req ,res) => {
//     withDB( async(db) => {
//         await db.collection('BOOKINGS').find({name : req.params['username']})
//     })
// });