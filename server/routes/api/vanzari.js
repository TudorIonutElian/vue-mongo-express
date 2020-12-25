const express = require('express');
const vanzare = require('../../../models/Vanzare');
const router = express.Router();


router.get('/', async(req, res) => {
    try {
        let vanzariReturnate = null;
        await vanzare.find({}).then(data => vanzariReturnate = data);
        res.json(vanzariReturnate);
    } catch (error) {
        console.log({ message: error });
    }

});

router.get(`/:id`, async(req, res) => {
    try {
        let vanzareData = null;
        await vanzare.findById(req.params.id).then(data => vanzareData = data);
        res.json(vanzareData);
    } catch (error) {
        console.log({ message: error });
    }
});

router.post(`/`, (req, res) => {
    console.log(req.body);
});



module.exports = router;