const express = require("express");
const router = express.Router();
const design = require("../controller/designs");

router.post("/add-designs", design.addDesign);
router.get("/find-designs", design.findDesign);
router.get("/find-all-designs", design.findAllDesign);
// router.get("/searchapi", design.searchapi);

module.exports = router;
