const mongoose = require("mongoose");
const cart = require("../models/carts");

class Cart {
  async addCart(req, res) {
    console.log("addCart function start");
    try {

      if (!req.body.user_id) {
        throw new Error("Please provide user_id");
      }
      
      const Data = await cart.create(req.body);

      res.json({
        message: "addCart successfully",
        data: Data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async listCart(req, res) {
    console.log("listCart function start");
    try {
      const Data = await cart.find(req.body);
      res.json({
        message: "listCart successfully",
        data: Data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCart(req, res) {
    console.log("deleteCart function start");
    try {
      const Data = await cart.deleteOne({
        user_id: req.body.user_id,
        design_id: req.body.design_id
      });
      res.json({
        message: "deleteCart successfully",
        data: Data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateCart(req, res) {
    console.log("updateCart function start");
    try {
      if (!req.body._id) {
        throw new Error("Please provide id");
      }
      await cart.findOneAndUpdate({ _id: req.body._id }, req.body);
      res.json({
        message: "updated successfully"
      });
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new Cart();
