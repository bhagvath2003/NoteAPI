const express = require("express");
const app = express();
const userRouter = require("./routes/userRouters");
const noteRouter = require("./routes/noteRouters");
const imageRouter = require("./routes/imageRouter");
const mongoose = require("mongoose");
const Port = 1500;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`HTTP Method - ${req.method} URL - ${req.url}`);
  next();
});

app.use("/user", userRouter);
app.use("/note", noteRouter);
app.use("/image", imageRouter);

mongoose
  .connect(
    "mongoDB Database"
  )
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server started on the PORT Number ${Port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
