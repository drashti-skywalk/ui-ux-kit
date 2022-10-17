const mongoose = require("mongoose");

const designSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sub_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  screens: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "categorys",
  },
});

const designsModel = mongoose.model("designs", designSchema);

module.exports = designsModel;