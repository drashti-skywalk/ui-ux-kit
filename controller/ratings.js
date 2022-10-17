const mongoose = require("mongoose");
const rating = require("../models/ratings");

class Rating {

    async addRating(req, res) {
      console.log("addRating function start");
      try {
        if (!req.body.rating) {
          throw new Error("Please provide rating");
        }
        const Data = await rating.create(req.body);
        res.json(Data);
      } catch (error) {
        console.log(error);
      }
    }

    // async listSubCategory(req, res) {
    //   console.log("listSubCategory function start");
    //   try {
    //     const data = await rating.find().populate("category_id");
    //     res.json(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // async updateSubCategory(req, res) {
    //   console.log("updateSubCategory function start");
    //   try {
    //     if (!req.body.id) {
    //       throw new Error("Please provide id");
    //     }
    //     await rating.findOneAndUpdate({ _id: req.body.id }, req.body);
    //     res.json("updated");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    
}

module.exports = new Rating();
