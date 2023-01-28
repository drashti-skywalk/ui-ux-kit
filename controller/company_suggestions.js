const mongoose = require("mongoose");
const company_suggestion = require("../models/company_suggestions");

class Company_Suggestion {
  async add_Company_Suggestion(req, res) {
    console.log("add_Company_Suggestion function start");
    try {

    //   if (!req.body.user_id) {
    //     throw new Error("Please provide user_id");
    //   }
      
      const Data = await company_suggestion.create(req.body);
      res.json({
        message: "add_Company_Suggestion successfully",
        data: Data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async list_company_suggestions(req, res) {
    console.log("list_company_suggestions function start");
    try {
      const Data = await company_suggestion.findOne({user_id: req.body.user_id});
      res.json({
        message: "list_company_suggestions successfully",
        data: Data
      });
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new Company_Suggestion();
