const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  type: { type: String, enum: ['Cost per Order', 'Cost per Click', 'Buy One Get One'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  schedule: [{
    day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true }
  }]
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
