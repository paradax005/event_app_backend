const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        availableTickets: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
        eventCover: {
            type: String,
        },

    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Event', EventSchema);
