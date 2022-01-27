require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cookieParser = require("cookie-parser");

// PORT
const PORT = process.env.PORT || 5000;

// SERVER
app.listen(PORT, () => {
  console.log(`APP IS RUNNING AT PORT: ${PORT}`);
});

// DB CONNECTION
mongoose
  .connect(
    "mongodb+srv://plaza:palindrome@plaza.u0edm.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB CONNECTED");
  });

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// ROUTES
app.use("/api", authRoutes);
