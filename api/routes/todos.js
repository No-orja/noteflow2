const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
  toggleCompleteTodo
} = require("../controllers/todoController");

router.get("/", getAllTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.get("/:id", getTodoById); 
router.patch("/changeStatus/:id", toggleCompleteTodo); 


module.exports = router;
