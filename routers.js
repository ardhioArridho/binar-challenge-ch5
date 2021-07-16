const express = require('express');
const app = express();
const router = express.Router();
const dbconnection = require('./dbconnection')
const booking = require('./bookingSchema');
const billSchema = require('./billSchema');

router.get('/', async (req,res) => {
    res.render('home')
});

// router.get('/bookings', async (req,res) => {
//     let bookingList = [];
//     booking.find((err, bookings) =>{
//         if(bookings){
//             for(let rsvp of bookings){
//                 bookingList.push({
//                     id : rsvp.id,
//                     guest : rsvp.guest,
//                     roomtype : rsvp.roomtype,
//                     duration : rsvp.duration
//                 })
//             }
//             res.render('views/')
//         }
//     })
// });



router.get('/rsvp', async (req,res) => {
    res.render('rsvp')
});

router.post('/rsvp', (req,res) => {
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    const order = new booking({
        guest : req.body.guest,
        roomtype : req.body.roomtype,
        duration : req.body.duration
    })
    order.save(order)
})













router.get('/bookings/update/:bookingID', async (req,res) => {
    res.send('TO BE UPDATED IS THIS ONE')
});

router.get('/bookings/delete/:bookingID', async (req,res) => {
    res.send('THIS IS THE PLACE IT IS DELETED')
})

module.exports = router