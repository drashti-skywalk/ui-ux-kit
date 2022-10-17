const express = require("express");
const router = express.Router();
const membership = require("../controller/memberships");

// router.post("/login-user", user.loginUser);
router.post("/add-Membership", membership.addMembership);

module.exports = router;