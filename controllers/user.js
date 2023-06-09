const User = require("../models/User.js");
const Individual = require("../models/Individual.js");
const Band = require("../models/Band.js");

exports.getUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const individual = await Individual.find({ user: id })
      .sort({ date: 1, time1: 1 })
      .populate({
        path: "user",
        select: "username",
      });
    const band = await Band.find({ user: id })
      .sort({ date: 1, time1: 1 })
      .populate({
        path: "user",
        select: "username",
      });
    return res.status(200).json({ user, individual, band });
  } catch (error) {
    console.log(error);
  }
};
