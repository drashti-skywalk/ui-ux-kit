const mongoose = require("mongoose");
const design = require("../models/designs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class Design {
    async addDesign(req, res) {
        console.log("addDesign function start");
        try {
          if (!req.body.name) {
            throw new Error("Please provide name");
          }
          const Data = await design.create(req.body);
          res.json(Data);
        } catch (error) {
          console.log(error);
        }
    }

    async findDesign(req, res) {
      console.log("findDesign function start");
      try {
        const Data = await design.findOne({_id: req.body._id}).populate("category_id");
        res.json(Data);
      } catch (error) {
        console.log(error);
      }
    }
}

module.exports = new Design();