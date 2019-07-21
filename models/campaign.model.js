const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  name: { type: String, required: true },
}, {
  timestamps: true,
});

const Camapgin = mongoose.model('Campaign', campaignSchema);

module.exports = Camapgin;