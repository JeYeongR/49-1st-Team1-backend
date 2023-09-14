const express = require("express");
const { threadController } = require("../controllers");
const { asyncWrap } = require("../utils/errorHandler");
const router = express.Router();
const validateToken = require("../utils/validateToken");

router.post("/", validateToken, asyncWrap(threadController.writeThread));
router.delete("/", validateToken, asyncWrap(threadController.deleteThread));
router.get("/", asyncWrap(threadController.threadsList));
router.put("/:threadId", validateToken, asyncWrap(threadController.modifyThreads));

module.exports = { router };