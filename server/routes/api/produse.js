const express = require('express');
const produs = require('../../../models/Produs');
const router = express.Router();


router.get('/', async(req, res) => {
    try {
        let produseReturnate = null;
        await produs.find({}).then(data => produseReturnate = data);
        res.json(produseReturnate);
    } catch (error) {
        console.log({ message: error });
    }

});

router.get(`/:id`, async(req, res) => {

});

router.post(`/`, (req, res) => {
    console.log(req.body);
});



module.exports = router;