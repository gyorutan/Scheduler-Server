const mongoose = require("mongoose");

const bandSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bandName: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: Array,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;
