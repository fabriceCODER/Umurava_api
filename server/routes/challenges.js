const express = require('express');
const router = express.Router();
const Challenge = require('../models/challenges');

router.get('/', async (req, res) => {
    try {
        const challenges = await Challenge.findAll();
        res.json(challenges);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch challenges' });
    }
});

router.post('/', async (req, res) => {
    try {
        const challenge = new Challenge(req.body);
        const createdChallenge = await challenge.create();
        res.status(201).json(createdChallenge);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create challenge' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) {
            return res.status(404).json({ error: 'Challenge not found' });
        }
        res.json(challenge);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch challenge' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) {
            return res.status(404).json({ error: 'Challenge not found' });
        }
        challenge.title = req.body.title;
        challenge.description = req.body.description;
        challenge.deadline = req.body.deadline;
        const updatedChallenge = await challenge.update();
        res.json(updatedChallenge);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update challenge' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) {
            return res.status(404).json({ error: 'Challenge not found' });
        }
        await challenge.delete();
        res.json({ message: 'Challenge deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete challenge' });
    }
});

module.exports = router;