const mongoose = require("mongoose");
const membership = require("../models/memberships");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class Membership {

    async addMembership(req, res) {
        console.log("addMembership function start");
        try {
          if (!req.body.title) {
            throw new Error("Please provide title");
          }
          const Data = await membership.create(req.body);

          res.json({
            message: "addMembership successfully",
            data: Data
          });
        } catch (error) {
          console.log(error);
        }
    }

    async findMembership(req, res) {
      console.log("findMembership function start");
      try {
        // const Data = await categoryModel.find();
        const Data = await membership.find(req.body);
        res.json({
          message: "findMembership successfully",
          data: Data
        });
      } catch (error) {
        console.log(error);
      }
    }
}

module.exports = new Membership();
