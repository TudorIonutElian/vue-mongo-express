const mongoose = require('mongoose');

const categorieSchema = mongoose.Schema({
    titlu: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    dataCreare: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('categorie', categorieSchema);