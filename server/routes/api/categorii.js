const express = require('express');
const Categorie = require('../../../models/Categorie');
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
router.post(`/`, async(req, res) => {
    // Creare Categorie Noua
    const categorieNoua = new Categorie({ titlu: req.body.titlu, descriere: req.body.descriere, dataCreare: new Date });

    // Salvare Categorie Noua
    categorieNoua.save();

    // Returnare Categorie Noua
    res.send(categorieNoua);
});

// Sterge categorie
router.delete(`/`, async(req, res) => {
    // Creare Categorie Noua
    await categorie.findByIdAndDelete(req.body.idCategorie);
    res.sendStatus(200);
});



module.exports = router;