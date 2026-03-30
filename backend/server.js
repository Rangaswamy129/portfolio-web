const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://portfolio-web-silk-nu.vercel.app/"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
// Test API
app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

//  SESSION CONFIG (NO JWT)
app.use(session({
  secret: "mysessionsecret", // any random string
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false
  }
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));