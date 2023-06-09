const mongoose = require("mongoose");

const individualSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

const Individual = mongoose.model("Individual", individualSchema);
module.exports = Individual;
