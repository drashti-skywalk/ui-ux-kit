const mongoose = require("mongoose");

const membershipSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  price:{
    type: String,
    required: true,
  }
});

const membershipsModel = mongoose.model("memberships", membershipSchema);

module.exports = membershipsModel;
