const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
 /* slots: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slot',
    default: [] // Optional field, default to an empty array
  }],*/
  role: {
    type: String,
    enum: ['barber', 'admin', 'customer', 'unknown'],
    default: 'unknown'
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  nbrSlots: {
    type: Number,
    default: 0
  },
  profilePic: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  state: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  opensAt: {
    type: String,
    default: ''
  },
  closesAt: {
    type: String,
    default: ''
  }

});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
