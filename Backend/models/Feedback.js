const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  donorName: { type: String, required: true, maxlength: 50 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comments: { type: String, required: true, maxlength: 500 },
});

module.exports = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
