const express = require("express");
const router = express.Router();
const company_suggestion = require("../controller/company_suggestions");

router.post("/add-Company_Suggestion", company_suggestion.add_Company_Suggestion);
router.get("/list-Company_Suggestion", company_suggestion.list_company_suggestions);
// router.post("/update-category", category.updateCategory);

module.exports = router;