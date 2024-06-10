const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = imageSchema;
