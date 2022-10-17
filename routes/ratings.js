const express = require("express");
const router = express.Router();
const rating = require("../controller/ratings");

router.post("/add-rating", rating.addRating);
// router.get("/find-sub-category", sub_category.listSubCategory);
// router.post("/update-sub-category", sub_category.updateSubCategory);

module.exports = router;
