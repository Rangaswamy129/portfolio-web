const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// CORS setup
const allowedOrigins = [
  "http://localhost:3000",                    // local dev
  "https://portfolio-web-silk-nu.vercel.app/" // Vercel frontend
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman, curl)
    if (!origin) return callback(null, true);
    if (!allowedOrigins.includes(origin)) {
      return callback(new Error("CORS policy does not allow this origin."), false);
    }
    return callback(null, true);
  },
  credentials: true, // allow cookies
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allow all methods
  allowedHeaders: ["Content-Type", "Authorization"] // allow headers
}));

// Handle preflight requests
app.options("/", cors());

// Test root route
app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

// Session configuration
app.use(session({
  secret: "mysessionsecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,  // true if using HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1 hour
  }
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Start server using Render port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));