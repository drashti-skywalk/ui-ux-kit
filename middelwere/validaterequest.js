// var jwt = require('jwt-simple');
// import jwt from 'jsonwebtoken';
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
const usersModel = require("../models/users");
// const adminsModel = require("../models/admins");
// import token from "../constant/token";
const token = process.env.token;
// const models = require("../models");

const authValidater = function (req, res, next) {
  try {
    console.log("Enterd in auth validater function");

    var access_token =
      (req.body && req.body.access_token) || req.headers["authorization"];
    //matching null if user dont have saved the token in browser in that case it will be string type of null value
    console.log("access_token", access_token);
    //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5MjZkZjBmLTMzN2YtNGY0Mi1iODhhLTc2ZGU0ZTIzMDFmMSIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjM0MTI0OTU5LCJleHAiOjE2MzQyMTEzNTl9.QOa5SQmaYtlMUv9E-SVL9LexCi3KBhDkvYtaCPVhYfQ

    if (
      access_token &&
      access_token.split(" ")[1] &&
      access_token.split(" ")[1] != "null"
    ) {
      console.log("!!!!!!!!!validate auth start here");

      access_token = access_token.split(" ")[1];
      let secret = token;

      let decoded = jwt.decode(access_token);
      console.log(decoded);
      if (decoded.role == "User") {
        usersModel
          .findOne({
            _id: mongoose.Types.ObjectId(decoded._id),
          })
          .then((user) => {
            console.log("name of user", user);
            req.user = user;
            next();
          })
          .catch((error) => {
            res.json({
              message: "token Expired",
              error: error,
            });
            return;
          });
      } else {
        adminsModel
          .findOne({
            _id: mongoose.Types.ObjectId(decoded._id),
          })
          .then((admin) => {
            console.log("name of admin", admin);
            req.admin = admin;
            next();
          })
          .catch((error) => {
            res.json({
              message: "token Expired",
              error: error,
            });
            return;
          });
      }
    } else {
      res.status(200).json({
        message: "unauthorized Token",
      });
      return;
    }
  } catch (err) {
    //res.status(500);
    console.log("This is the error", err);
    res.status(500).json({
      message: "server error",
      error: err,
    });
  }
};

module.exports = authValidater;
