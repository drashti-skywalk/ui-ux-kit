const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const middelwere = require("./middelwere/validaterequest");
const multer = require("multer");
const upload = multer();

const app = express();

mongoose.connect(process.env.Mongo_url, function (err, db) {
  if (err) {
    console.log(err);
  }
  console.log("Database connection established");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());

app.use("/auth", middelwere, require("./routes"));
app.use("/", require("./routes"));

app.listen(process.env.PORT, function () {
  console.log("port listen " + process.env.PORT);
});