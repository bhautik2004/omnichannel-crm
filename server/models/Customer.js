const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);
