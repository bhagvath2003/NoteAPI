const express = require("express");
const {
  getNote,
  updateNote,
  createNote,
  deleteNote,
} = require("../controllers/noteController");
const noteRouter = express.Router();
const auth = require("../middlewares/auth");

noteRouter.get("/", auth, getNote);

noteRouter.post("/", auth, createNote);

noteRouter.delete("/:id", auth, deleteNote);

noteRouter.put("/:id", auth, updateNote);

module.exports = noteRouter;
