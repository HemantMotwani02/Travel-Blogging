const mongoose = require('mongoose');


const allCardSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    title: String,
    desc: String,
    country: String,
    state: String,
    city: String,
    image: String
});

const AllCityCard = new mongoose.model('Allcard', allCardSchema);
module.exports = AllCityCard;