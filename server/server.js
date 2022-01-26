require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`APP IS RUNNING AT PORT: ${PORT}`);
});

console.log(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("DB CONNECTED");
});
