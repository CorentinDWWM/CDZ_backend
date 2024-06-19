const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Role", roleSchema);
