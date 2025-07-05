const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdDate: Date,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Note", noteSchema);
