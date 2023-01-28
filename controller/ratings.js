const mongoose = require("mongoose");
const rating = require("../models/ratings");
const design = require("../models/designs");

class Rating {

    async addRating(req, res) {
      console.log("addRating function start");
      try {
        if (!req.body.rating) {
          throw new Error("Please provide rating");
        }
        const Data = await rating.create(req.body);
        res.json({
          message: "addRating successfully",
          data: Data
        });
      } catch (error) {
        console.log(error);
      }
    }

    async findRating(req, res) {
      console.log("findRating function start");
      try {

        const {design_id} = req.body;

        const data = await rating.aggregate(
          [
            {
              $match:
              {
                design_id:mongoose.Types.ObjectId(design_id)
              },
            },{
              $group:{
                _id: "$design_id",
                AverageValue: { $avg: "$rating" }
              }
            }
          ]
        )

        const data1 = await design.findByIdAndUpdate(design_id, {rating:data[0].AverageValue})

        const data2 = await design.find({_id:design_id})
          // console.log(data1);
        // res.json(data2);
        res.json({
          message: "findRating successfully",
          data: data2
        });
      } catch (error) {
        console.log(error);
      }
    }
    
}

module.exports = new Rating();
