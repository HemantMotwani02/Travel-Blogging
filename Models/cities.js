const mongoose = require('mongoose');

const cardcity = new mongoose.Schema({
    citytitle: {
        type: String
    },

    image: {
        type: String
    }

});

const Citycard = new mongoose.model('Citycard', cardcity);
module.exports = Citycard;