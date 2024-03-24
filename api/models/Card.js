const mongoose = require("mongoose");

const Card = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    star: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Card);
