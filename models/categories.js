const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const categoryModel = mongoose.model("categorys", categorySchema);

module.exports = categoryModel;
