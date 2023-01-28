const express = require("express");
const router = express.Router();
const cart = require("../controller/carts");

router.post("/add-cart", cart.addCart);
router.post("/list-cart", cart.listCart);
router.delete("/delete-cart", cart.deleteCart);
router.post("/update-cart", cart.updateCart);

module.exports = router;