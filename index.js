const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const middelwere = require("./middelwere/validaterequest");
const multer = require("multer");
const upload = multer();

const app = express();
console.log(process.env.Mongo_url);
mongoose.connect(process.env.Mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("DB Connected"))
  .on("error", (error) => {
      console.log("Error While Connecting With DB");
  });
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());

app.use("/auth", middelwere, require("./routes"));
app.use("/", require("./routes"));

app.listen(process.env.PORT, function () {
  console.log("port listen " + process.env.PORT);
});