const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

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