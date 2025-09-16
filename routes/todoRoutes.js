const express = require("express");
const { getTodos, addTodo } = require("../controllers/todoController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, getTodos);
router.post("/", auth, addTodo);

module.exports = router;
