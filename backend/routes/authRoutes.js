const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user"); // your Mongoose User model
const authMiddleware = require("../middleware/authMiddleware");

// ===================== REGISTER =====================
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Store user in session
    req.session.user = { id: newUser._id, name: newUser.name, email: newUser.email };

    res.status(201).json({ user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ===================== LOGIN =====================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Store user in session
    req.session.user = { id: user._id, name: user.name, email: user.email };

    res.status(200).json({ user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ===================== GET CURRENT USER =====================
router.get("/me", authMiddleware, (req, res) => {
  // authMiddleware ensures req.session.user exists
  res.status(200).json({ user: req.session.user });
});

// ===================== LOGOUT =====================
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });

    // Clear cookie in browser
    res.clearCookie("connect.sid", {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });
    res.status(200).json({ message: "Logged out successfully" });
  });
});

module.exports = router;