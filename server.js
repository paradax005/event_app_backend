const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user'); // Adjust the path as needed
const dotenv = require("dotenv").config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,).then(() => {
  console.log('connected');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Use user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send({ msg: 'test for sending api request !! .)' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
