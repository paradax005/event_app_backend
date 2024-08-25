const Event = require('../models/event');

const createEvent = async (req, res) => {
    const { user, name, date, location, price, availableTickets, description, eventCover } = req.body;

    try {
        const newEvent = new Event({
            user,
            name,
            date,
            location,
            price,
            availableTickets,
            description,
            eventCover,
        });

        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        res.status(204).json(deletedEvent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id, req.body,
            { new: true },
        );
        res.status(200).json(updatedEvent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAllEvent = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createEvent,
    deleteEvent,
    updateEvent,
    getAllEvent,
}