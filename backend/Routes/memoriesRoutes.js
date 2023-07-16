const express = require("express");
const router = express.Router();
const {
  getMemories,
  createMemories,
  getMemory,
  updateMemory,
  deleteMemory,
} = require("../Controller/memoriesController");

const validateToken = require("../middleware/validateToken");


router.use(validateToken);

router.route("/").get(getMemories);

router.route("/").post(createMemories);

router.route("/:id").get(getMemory);

router.route("/:id").put(updateMemory);

router.route("/:id").delete(deleteMemory);

module.exports = router;
