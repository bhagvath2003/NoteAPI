const imageModel = require("../models/image");

const createImage = async (req, res) => {
  const { imageId, name, url } = req.body;

  const newImage = new imageModel({
    imageId: imageId,
    name: name,
    url: url,
    userId: req.userId,
  });

  try {
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateImage = async (req, res) => {
  const imageId = req.params.imageId;
  const { name, url } = req.body;

  const newImage = {
    name: name,
    url: url,
  };
  try {
    const result = await imageModel.findOneAndUpdate({ imageId }, newImage, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteImage = async (req, res) => {
  const imageId = req.params.imageId;
  try {
    const image = await imageModel.findOneAndDelete({imageId});
    res.status(202).json(image);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getImage = async (req, res) => {
  try {
    const images = await imageModel.find();
    res.status(200).json(images);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getImageId = async (req, res) => {
  const imageId = req.params.imageId;
  try {
    const images = await imageModel.findOne({ imageId });
    res.status(200).json(images);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = {
  createImage,
  updateImage,
  deleteImage,
  getImage,
  getImageId,
};
