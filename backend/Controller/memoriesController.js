const asyncHandler = require("express-async-handler");
const Memories = require("../models/memoriesModel");

const getMemories = asyncHandler(async (req, res) => {
  const memories = await Memories.find({user_id:req.user.id});
  res.status(200).json(memories);
});

const createMemories = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { title, date, description } = req.body;
  if (!title || !date || !description) {
    res.status(400);
    throw new Error("ALL the field are Mandatory!");
  }
  const memory = await Memories.create({
    title,
    date,
    description,
    user_id:req.user.id,
  });
  res.status(201).json({ message: `Memories created for ${title}` });
});

const getMemory = asyncHandler(async (req, res) => {
  const memory = await Memories.findById(req.params.id);
  if (!memory) {
    res.status(404);
    throw new Error("memory Not Found");
  }
  res.status(200).json(memory);
});

const updateMemory = asyncHandler(async (req, res) => {
  const memory = await Memories.findById(req.params.id);
  if (!memory) {
    res.status(404);
    throw new Error("memory not found");
  }
  if(memory.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("Dont have permission to update.")
  }
  const updatedMemory = await Memories.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedMemory);
});

const deleteMemory = asyncHandler(async (req, res) => {
  const memory = await Memories.findById(req.params.id);
  if (!memory) {
    res.status(404);
    throw new Error("contact not found");
  }

  if(memory.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("Dont have permission to delete.")
  }
  await Memories.findByIdAndDelete(req.params.id);

  res.status(200).json(memory);
});

module.exports = {
  getMemories,
  createMemories,
  getMemory,
  updateMemory,
  deleteMemory,
};
