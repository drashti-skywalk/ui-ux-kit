const express = require("express");
const router = express.Router();
const design = require("../controller/designs");

router.post("/add-designs", design.addDesign);
router.get("/find-designs", design.findDesign);

module.exports = router;
