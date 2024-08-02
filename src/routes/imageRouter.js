const express = require("express");
const {
  createImage,
  getImage,
  deleteImage,
  updateImage,
  getImageId,
} = require("../controllers/imageController");
const imageRouter = express.Router();

imageRouter.get("/", getImage);

imageRouter.get("/:imageId/get", getImageId);

imageRouter.post("/", createImage);

imageRouter.delete("/:imageId", deleteImage);

imageRouter.put("/:imageId", updateImage);

module.exports = imageRouter;
