const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
    cardtitle: {
        type: String
    },
    desc: {
        type: String

    },
    image: {
        type: String
    }

});

const cards = new mongoose.model('Card', cardsSchema);
module.exports = cards;