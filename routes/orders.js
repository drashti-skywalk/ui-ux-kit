const express = require("express");
const router = express.Router();
const order = require("../controller/orders");

router.post("/add-Order", order.addOrder);
router.post("/find-Order", order.findOrder);
router.post("/find-Latest-Order", order.findLatestOrder);
router.post("/update-Order", order.updateOrder);
router.delete("/delete-Order", order.deleteOrder);

module.exports = router;