const express = require('express');
const retur = require('../../../models/Retur');
const router = express.Router();


router.get('/', async(req, res) => {
    try {
        let retururiReturnate = null;
        await retur.find({}).then(data => retururiReturnate = data);
        res.json(retururiReturnate);
    } catch (error) {
        console.log({ message: error });
    }

});

router.get(`/:id`, async(req, res) => {
    try {
        let returData = null;
        await retur.findById(req.params.id).then(data => returData = data);
        res.json(returData);
    } catch (error) {
        console.log({ message: error });
    }
});

router.post(`/`, (req, res) => {
    console.log(req.body);
});



module.exports = router;