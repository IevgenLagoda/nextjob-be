const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: false },
  status: { type: String, required: false },
}, {
  timestamps: true,
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;