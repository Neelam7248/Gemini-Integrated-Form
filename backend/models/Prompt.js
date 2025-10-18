// models/Prompt.js
const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  response: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Prompt", promptSchema);
