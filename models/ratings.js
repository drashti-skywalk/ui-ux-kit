const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "users",
  },
  design_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "designs",
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const sub_categoryModel = mongoose.model("ratings", ratingSchema);

module.exports = sub_categoryModel;
