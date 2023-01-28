const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  cart_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "carts",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "users",
  },
  order_status: {
    type: Number,
    enum : [0,1],
    default:0
  },
  date: { 
    type: Date, 
    default: Date.now },
});

const ordersModel = mongoose.model("orders", ordersSchema);

module.exports = ordersModel;