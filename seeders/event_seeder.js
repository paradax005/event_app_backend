const mongoose = require('mongoose');
const Event = require('../models/event');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Sample event data
const events = [
    {
        user: mongoose.Types.ObjectId(),
        name: 'Tech Conference 2024',
        date: new Date('2024-05-15T09:00:00Z'),
        location: 'San Francisco, CA',
        price: 199.99,
        availableTickets: 150,
        description: 'A conference about the latest in tech and innovation.',
        eventCover: 'tech-conference-2024.jpg',
    },
    {
        user: mongoose.Types.ObjectId(),
        name: 'Music Festival Summer',
        date: new Date('2024-07-20T12:00:00Z'),
        location: 'Los Angeles, CA',
        price: 99.99,
        availableTickets: 500,
        description: 'Enjoy a day of music with your favorite bands and artists.',
        eventCover: 'music-festival-summer.jpg',
    },
    {
        user: mongoose.Types.ObjectId(),
        name: 'Art Gallery Opening',
        date: new Date('2024-03-10T18:00:00Z'),
        location: 'New York, NY',
        price: 49.99,
        availableTickets: 75,
        description: 'An exclusive opening of the new contemporary art gallery.',
        eventCover: 'art-gallery-opening.jpg',
    },
];

// Seed the database
const seedEvents = async () => {
    try {
        // Clear existing events
        await Event.deleteMany({});
        console.log('Existing events cleared.');

        // Insert sample events
        await Event.insertMany(events);
        console.log('Sample events added.');

        // Close the connection
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding events:', err);
        mongoose.connection.close();
    }
};

seedEvents();
