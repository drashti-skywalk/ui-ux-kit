const express = require("express");
const router = express.Router();
const screen = require("../controller/screens");

router.post("/add-screen", screen.addScreen);
router.post("/find-screen", screen.findScreen);
// router.post("/update-post", post.updatePost);

module.exports = router;