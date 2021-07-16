const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 4000

// middleware buat ngenalin request
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// set view engine
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.set('views', './views');



// __________________________________________________ROUTING_______________________________________________________

const router = require('./routers')
app.use('', router)

// _______________________________________________END OF ROUTING___________________________________________________

app.use(cors())

// error handling middleware
app.use((req,res,next) => {
    res.status(404).send('--------------RESOURCE CANNOT BE FOUND--------------')
    next()
});
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('-------------THERE IS AN INTERNAL ERROR-------------')
    next()
});

// listening to port
app.listen(port, ()=>{
    console.log('__________READY TO RUMBLE___________')
})