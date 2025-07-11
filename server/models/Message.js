const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  source: String,  // e.g. "whatsapp", "email"
  direction: String, // "inbound" or "outbound"
  status: String, // "open", "resolved"
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);
