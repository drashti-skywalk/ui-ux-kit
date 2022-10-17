const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
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
    price: {
        type: String,
        required: true,
    },
    user_specifications: {
        type: String,
        required: false,
    },
    specification_price: {
        type: String,
        required: false,
    },
});

const cartModel = mongoose.model("carts", cartSchema);

module.exports = cartModel;
