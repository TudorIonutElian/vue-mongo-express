const mongoose = require('mongoose');

const vanzariSchema = mongoose.Schema({
    idProdus: {
        type: String,
        required: true
    },
    cantitate: {
        type: Number,
        required: true
    },
    dataVanzare: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('vanzari', vanzariSchema);