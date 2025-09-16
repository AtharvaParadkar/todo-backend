const Todo = require("../models/todo");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user });
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const todo = await Todo.create({ text: req.body.text, user: req.user });
  res.json(todo);
};
