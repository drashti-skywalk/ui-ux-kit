const express = require("express");
const router = express.Router();
const cart = require("../controller/carts");

router.post("/add-cart", cart.addCart);
router.get("/list-cart", cart.listCart);
router.delete("/delete-cart", cart.deleteCart);

module.exports = router;