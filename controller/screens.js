const mongoose = require("mongoose");
const screen = require("../models/screens");

class Screen {
  async addScreen(req, res) {
    console.log("addScreen function start");
    try {
      if (!req.body.name) {
        throw new Error("Please provide name");
      }

      // Check if this user already exisits
      let Data = await screen.findOne({ name: req.body.name });
      if (Data) {
        return res.status(400).send('That screen already exisits!');
      } else {
        Data = await screen.create(req.body);
      }     
      res.json(Data);
    } catch (error) {
      console.log(error);
    }
  }

  async findScreen(req, res) {
    console.log("findScreen function start");
    try {
      const Data = await screen.findOne({name: req.body.name}).populate("design_id");
      res.json(Data);
    } catch (error) {
      console.log(error);
    }
  }

  // async updatePost(req, res) {
  //   console.log("updatePost function start");
  //   try {
  //     if (!req.body.id) {
  //       throw new Error("Please provide id");
  //     }
  //     await post.findOneAndUpdate({ _id: req.body.id }, req.body);
  //     res.json("updated");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

}

module.exports = new Screen();
