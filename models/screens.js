const mongoose = require("mongoose");

const screenSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  descreption: {
    type: String,
    required: false,
  },
  screen_img: {
    type: String,
    required: false,
  },
  design_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "designs",
  },
});

const screenModel = mongoose.model("screens", screenSchema);

module.exports = screenModel;
