const mongoose = require("mongoose");
const imageSchema = require("../models/image.schema");
const Images = mongoose.model("images", imageSchema);

const insertImg = async (req, res) => {
  console.log(req.body);
  try {
    const image = await Images.create({
      imgUrl: req.body.img,
    });
    res.status(200).json(image);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllImg = async (req, res) => {
  try {
    const allImages = await Images.find({});
    res.status(200).json(allImages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { insertImg, getAllImg };
