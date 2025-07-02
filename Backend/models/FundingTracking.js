const mongoose = require('mongoose'); // Add this line at the top

const fundingTrackingSchema = new mongoose.Schema({
  campaignId: { type: String, required: true },
  totalRaised: { type: Number, required: true },
  goalAmount: { type: Number, required: true },
  progress: { type: Number },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FundingTracking', fundingTrackingSchema);