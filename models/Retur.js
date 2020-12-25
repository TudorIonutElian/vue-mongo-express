const mongoose = require('mongoose');

const returSchema = mongoose.Schema({
    titlu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    categorie: {
        type: Number,
        required: true
    },
    valoare: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('retur', returSchema);