const mongoose = require("mongoose");
const categoryModel = require("../models/categories");

class Category {
  async addCategory(req, res) {
    console.log("addCategory function start");
    try {

      if (!req.body.name) {
        throw new Error("Please provide name");
      }
      
      const Data = await categoryModel.create(req.body);
      res.json(Data);
    } catch (error) {
      console.log(error);
    }
  }

  // async findCategory(req, res) {
  //   console.log("findCategory function start");
  //   try {
  //     // const Data = await categoryModel.find();
  //     const Data = await categoryModel.aggregate([
  //       {
  //         $lookup:{
  //           from:"sub_categories",
  //           localField:"_id",
  //           foreignField:"category_id",
  //           as:"categoryWiseSubCategory"
  //         }
  //       }
  //     ]);
  //     res.json(Data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async updateCategory(req, res) {
  //   console.log("updateCategory function start");
  //   try {
  //     if (!req.body.id) {
  //       throw new Error("Please provide id");
  //     }
  //     await categoryModel.findOneAndUpdate({ _id: req.body.id }, req.body);
  //     res.json("updated");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

module.exports = new Category();
