const express = require("express");
const router = express.Router();
const { Login, Register } = require("../controllers/auth.js");
const {
  getIndividualSchedules,
  getBandSchedules,
  createIndividualSchedule,
  createBandSchedule,
  deleteSchedule,
} = require("../controllers/schedule.js");
const { getUserProfile } = require("../controllers/user.js");

// Server Home
router.get("/", async (req, res) => {
  return res.status(200).json({ Message: "Hello ChatPod Server" });
});

// Get UserProfile
router.get("/user/:id", getUserProfile);

// Get Individual Schedules
router.get("/individual", getIndividualSchedules);

// Get Band Schedules
router.get("/band", getBandSchedules);

// Create Individual Schedule
router.post("/individual", createIndividualSchedule);

// Create Band Schedule
router.post("/band", createBandSchedule);

// Delete Schedule
router.delete("/delete/:id", deleteSchedule);

// Login
router.post("/login", Login);

// Register
router.post("/register", Register);

module.exports = router;
