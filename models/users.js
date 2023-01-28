const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: false,
  },
  profile_pic:{
    type: String,
  },
  memberships_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "memberships",
  },
  new_arrival_notification:{
    type: Boolean,
    required: false,
  },
  order_status_notification:{
    type: Boolean,
    required: false,
  },
  rate_notification:{
    type: Boolean,
    required: false,
  },
  new_arrival_email:{
    type: Boolean,
    required: false,
  },
  order_status_email:{
    type: Boolean,
    required: false,
  },
  rate_email:{
    type: Boolean,
    required: false,
  },
});

const usersModel = mongoose.model("users", userSchema);

module.exports = usersModel;
