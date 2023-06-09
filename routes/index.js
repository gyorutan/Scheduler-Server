const express = require("express");
const router = express.Router();
const { Login, Register } = require("../controllers/auth.js");

// Server Home
router.get("/", async (req, res) => {
  return res.status(200).json({ Message: "Hello ChatPod Server" });
});

// Login
router.post("/login", Login);

// Register
router.post("/register", Register);

module.exports = router;
