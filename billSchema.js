const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    paymentOption : {
        type : String,
        required : true
    },
    nominal : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("Bills", billSchema)