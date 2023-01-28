const express = require("express");
const router = express.Router();
const membership = require("../controller/memberships");

router.post("/add-Membership", membership.addMembership);
router.post("/find-Membership", membership.findMembership);

module.exports = router;