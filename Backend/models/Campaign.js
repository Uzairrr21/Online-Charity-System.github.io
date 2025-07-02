const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  goalAmount: {
    type: Number,
    required: true,
    min: 1
  },
  imageUrl: {
    type: String,
    default: ''
  }
});

// ✅ Correct export for CommonJS:
module.exports = mongoose.models.Campaign || mongoose.model('Campaign', CampaignSchema);
