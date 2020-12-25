const express = require('express');
//const categorii = require('../models/Produs');
const router = express.Router();

// Preluare toate categoriile
router.get('/', async(req, res) => {
    try {

    } catch (error) {
        console.log({ message: error });
    }

});

// Preluare categorie dupa ID
router.get(`/:id`, async(req, res) => {

});

// Adaugare categorie
router.post(`/`, (req, res) => {
    console.log(req.body);
});



module.exports = router;