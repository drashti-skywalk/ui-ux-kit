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
        const Data = await design.findOne({_id: req.body._id});
        res.json(Data);
      } catch (error) {
        console.log(error);
      }
    }

    async findAllDesign(req, res) {
      console.log("findDesign function start");
      try {
        const Data = await design.find(req.body);
        res.json(Data);
      } catch (error) {
        console.log(error);
      }
    }

    // async searchapi(req, res) {
    //   console.log("findDesign function start");
    //   try {
    //     console.log(req.query.key)
    //     const Data = await design.find(
    //       {
    //         "$and":[
    //           {"name":{$regex:req.query.key}}
    //         ]
    //       }
    //     );

    //     res.json(Data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
}

module.exports = new Design();