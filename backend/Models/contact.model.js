const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    title: String,
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
