const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Tip', tipSchema);
