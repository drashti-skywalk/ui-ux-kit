const mongoose = require("mongoose");
const user = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class User {
  async registerUser(req, res) {
    console.log("loginUser function start");
    try {
      if (!req.body.email) {
        throw new Error("Please provide email");
      }

      // Check if this user already exisits
      let Data = await user.findOne({ email: req.body.email });
      if (Data) {
        return res.status(400).send('That user already exisits!');
      } else {
        let createObject = {
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8),
          phone: req.body.phone,
          profile_pic: req.body.profile_pic,
          memberships_id: req.body.memberships_id,
          new_arrival_notification: req.body.new_arrival_notification,
          order_status_notification: req.body.order_status_notification,
          rate_notification: req.body.rate_notification,
          new_arrival_email: req.body.new_arrival_email,
          order_status_email: req.body.order_status_email,
          rate_email: req.body.rate_email
        };
        Data = await user.create(createObject);
      }

      const authToken = jwt.sign(
        { _id: Data._id, role: "User" },
        process.env.token,
        {
          expiresIn: 86400000000000, //for only 24 hours
        }
      );

      res.json({
        message: "user registered successfully",
        data: Data,
        authToken: authToken,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async loginUser(req, res) {
    console.log("findpost function start");
    try {
      if (!req.body.email) {
        throw new Error("Please provide email");
      }

      const Data = await user.findOne({ email: req.body.email }).populate("memberships_id");
      const cmp = await bcrypt.compare(req.body.password, Data.password);
      if (!cmp) {
        throw "Please provide valid password";
      }

      const authToken = jwt.sign(
        {
          _id: Data._id,
          role: "User",
        },
        process.env.token,
        {
          expiresIn: 86400000000000,
        }
      );
      res.json({
        message: "user login successfully",
        data: Data,
        authToken: authToken,
      });
    } catch (error) {
      res.json(error);
    }
  }

  async updateUser(req, res) {
    console.log("updateUser function start");
    try {
      if (!req.body._id) {
        throw new Error("Please provide id");
      }
      await user.findByIdAndUpdate(req.body._id, req.body);
      res.json("Data updated successfully");
    } catch (error) {
      console.log(error);
    }
  }

  async logoutUser(req, res) {
    console.log("logoutUser function start");
    try {

      let updateObject = {
        authToken: null,
      };

      let updateUserData = await user.findOneAndUpdate(
        {
          _id: req.body._id,
        },
        {
          $set: updateObject,
        },
        {
          new: true,
        }
      ).exec();

      res.json({
        message: "successfully Logged out",
        data: updateUserData,
      });
    } catch (error) {
      res.json({
        message:
          typeof error === "string"
            ? error
            : typeof error.message === "string"
            ? error.message
            : constants.server_error,
      });

      return;
    }
  }

}

module.exports = new User();
