const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (error) {
        console.log('Error');
    }
})

router.get('/:id', async (req, res) => {
    try {
        const aliens = await Alien.findById(req.params.id);
        res.json(aliens)
    } catch (error) {
        console.log('error');
    }
})

router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    })
    try {
        const saveAlien = await alien.save()
        res.json(saveAlien)
    } catch (error) {
        res.send('Error: ' + error.message)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const oldAlien = await alien.save();
        res.json(oldAlien)
    } catch (error) {
        res.send('Error')
    }
})
    router.delete('/:id', async (req, res) => {
        try {
            const alien = await Alien.findById(req.params.id);
            const removedAlien = await alien.deleteOne();
            res.json(removedAlien);
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });
    



module.exports = router;