// const User = require("../models/User.js");
const Band = require("../models/Band.js");
const Individual = require("../models/Individual.js");

exports.getIndividualSchedules = async (req, res) => {
  try {
    const individualSchedules = await Individual.find()
      .sort({ date: 1 })
      .populate({
        path: "user",
        select: "username",
      });
    return res.status(200).json(individualSchedules);
  } catch (error) {
    console.log(error);
  }
};

exports.getBandSchedules = async (req, res) => {
  try {
    const bandSchedules = await Band.find().sort({ date: 1 }).populate({
      path: "user",
      select: "username",
    });
    return res.status(200).json(bandSchedules);
  } catch (error) {
    console.log(error);
  }
};

exports.createIndividualSchedule = async (req, res) => {
  try {
    const { currentUser, date, time, createdAt } = req.body;

    const modifiedTime = time.map(({ value }) => value);

    const existingSchedules = await Individual.find({
      date: date.value,
      time: { $in: modifiedTime },
    });

    if (existingSchedules.length > 0) {
      return res.status(400).json({ error: "error" });
    }

    const individualSchedule = await Individual.create({
      user: currentUser,
      date: date.value,
      time: modifiedTime,
      createdAt,
    });
    await individualSchedule.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.createBandSchedule = async (req, res) => {
  try {
    const { currentUser, bandName, date, time, createdAt } = req.body;

    const modifiedTime = time.map(({ value }) => value);

    const existingSchedules = await Band.find({
      date: date.value,
      time: { $in: modifiedTime },
    });

    if (existingSchedules.length > 0) {
      return res.status(400).json({ error: "error" });
    }

    const bandSchedule = await Band.create({
      user: currentUser,
      bandName,
      date: date.value,
      time: modifiedTime,
      createdAt,
    });
    await bandSchedule.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteSchedule = async (req, res) => {
  const { id } = req.params;
  await Individual.findByIdAndRemove(id);
  await Band.findByIdAndRemove(id);
  return res.status(200).json({ success: true });
};