const asyncHandler = require("express-async-handler");
const Comments = require("../models/commentModel");

const getComments = asyncHandler(async (req, res) => {
  const memories = await Comments.find({memory_id:req.params.id});
  res.status(200).json(memories);
});

const createComments = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { title } = req.body;
    if (!title) {
      res.status(400);
      throw new Error("ALL the field are Mandatory!");
    }
    const comment = await Comments.create({
      title,
      memory_id:req.params.id,
    });
    res.status(201).json({ message: `Comment created for ${comment.title}` });
  });


  
module.exports = {
    getComments,
    createComments,
  };