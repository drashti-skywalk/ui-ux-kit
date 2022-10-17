const express = require("express");
const router = express.Router();
const user = require("../controller/users");

router.post("/login-user", user.loginUser);
router.post("/register-user", user.registerUser);

module.exports = router;