const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: false },
  companyId: {type: String, required: true},
  companyName: {type: String, required: false},
  status: { type: String, required: false },
}, {
  timestamps: true,
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;