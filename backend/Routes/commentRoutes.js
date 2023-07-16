const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateToken");
const { createComments,getComments } = require("../Controller/commentController");

router.use(validateToken);

router.route("/:id").get(getComments);

router.route("/:id").post(createComments);

module.exports = router;