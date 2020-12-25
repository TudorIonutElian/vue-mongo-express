const express = require('express');
const categorie = require('../../../models/Categorie');
const router = express.Router();

// Preluare toate categoriile
router.get('/', async(req, res) => {
    try {
        let categoriiAll = null;
        await categorie.find({}).then(data => categoriiAll = data);
        res.json(categoriiAll);
    } catch (error) {
        console.log({ message: error });
    }
});

// Preluare categorie dupa ID
router.get(`/:id`, async(req, res) => {
    try {
        let categorieReturnata = null;
        await categorie.findById(req.params.id).then(data => categorieReturnata = data);
        res.json(categorieReturnata);
    } catch (error) {
        console.log({ message: error });
    }
});

// Adaugare categorie
router.post(`/`, (req, res) => {
    console.log(req.body);
});



module.exports = router;