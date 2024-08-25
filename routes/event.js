const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event');
// Create an event
router.post('/create', eventController.createEvent);

// Read all events
router.get('/', eventController.getAllEvent);

// Update an event by ID
router.put('/:id', eventController.updateEvent);

// Delete an event by ID
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
