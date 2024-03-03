const express = require('express');
const router = express.Router();
const Task = require('./task');

// Create a new task
router.post('/tasks', async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        console.log('New task created:', newTask);
        res.status(201).json(newTask); // 201 Created
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Retrieve all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;