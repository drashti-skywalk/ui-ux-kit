const express = require("express");
const router = express.Router();
const category = require("../controller/category");

// router.post("/auth/add-category", category.addCategory);
router.post("/add-category", category.addCategory);
router.get("/find-category", category.findCategory);
router.post("/update-category", category.updateCategory);

module.exports = router;
