const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/ch6-challenge';

mongoose.connect(dbURI, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
    console.log('MongoDB is now connected')
})

mongoose.Promise = global.Promise;
module.exports = mongoose;