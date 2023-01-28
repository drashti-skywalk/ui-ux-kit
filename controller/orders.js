const mongoose = require("mongoose");
const order = require("../models/orders");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cartModel = require("../models/carts");
dotenv.config();

class Order {
    async addOrder(req, res) {
        console.log("addOrder function start");
        try {
          const {cart_id} = req.body;
          const getcart = await cartModel.findById(cart_id);
          if(getcart == null || getcart == undefined){
            throw new Error("Please provide id");

          }
          const Data = await order.create({cart_id:cart_id, user_id:getcart.user_id});

          res.json({
            message: "addOrder successfully",
            data: Data
          });
        } catch (error) {
          return res.json({
            success:false,
            data:null,
            message:error.message||"Having Issues"
          })
          console.log(error);
        }
    }

    async findOrder(req, res) {
      console.log("findOrder function start");
      try {
        const Data = await order.aggregate([
          {
            $lookup:{
              from: "users",
              localField: "user_id",
              foreignField:"_id",
              as:"UserData"
            },

              $lookup:{
                from: "carts",
                let:{id:"$cart_id"},
                pipeline: [
                  {$match:{$expr:{$and:[{$eq:["$_id","$$id"]}]}}},
                  {
                  $lookup:{
                    from: "designs",
                    localField: "design_id",
                    foreignField:"_id",
                    as:"designDetails"
                  }},
                ],
                as:"cartData"
              }
          },
         
          
        ]);
        res.json({
          message: "findOrder successfully",
          data: Data
        });
      } catch (error) {
        console.log(error);
      }
    }

    async findLatestOrder(req, res) {
      console.log("findLatestOrder function start");
      try {
        const Data = await order.find({order_status:1}).sort({"date": -1}).limit(3);
        res.json({
          message: "findLatestOrder successfully",
          data: Data
        });
      } catch (error) {
        console.log(error);
      }
    }

    async updateOrder(req, res) {
      console.log("updateOrder function start");
      try {
        if (!req.body._id) {
          throw new Error("Please provide id");
        }
        await order.findByIdAndUpdate(req.body._id, req.body);
        res.json({
          message: "updated successfully"
        });
      } catch (error) {
        console.log(error);
      }
    }

    async deleteOrder(req, res) {
      console.log("deleteCart function start");
      try {
        const Data = await order.findByIdAndDelete(req.body._id);
        res.json({
          message: "deleted successfully"
        });
      } catch (error) {
        console.log(error);
      }
    }
}

module.exports = new Order();