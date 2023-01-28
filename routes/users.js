const express = require("express");
const router = express.Router();
const user = require("../controller/users");

router.post("/login-user", user.loginUser);
router.post("/register-user", user.registerUser);
router.post("/update-user", user.updateUser);
router.post("/logout-user", user.logoutUser);

module.exports = router;