const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/memoriesDiary")
  .then(() => console.log("We are connected to DB"))
  .catch(() => console.log("ERROR!"));

  app.use(cors());


  app.use("/DiaryUsers", require("./Routes/userRoutes"));
  app.use("/Diarymemories",require("./Routes/memoriesRoutes"))
  app.use('/comments',require("./Routes/commentRoutes"))


app.listen(5000, () => {
    console.log(`listening or live at 5000`);
  });
  