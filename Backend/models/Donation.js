const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: {
    type: String,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    min: 1
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['credit', 'paypal', 'bank']
  },
  cause: {
    type: String,
    required: true,
    enum: ['education', 'healthcare', 'environment', 'animals']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Donation', donationSchema);