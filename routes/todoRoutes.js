
import express from "express";
import {
  showTodos,
  createTodo,
  updateTodoStatus,
  removeTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", showTodos);
router.post("/add", createTodo);
router.post("/update/:id", updateTodoStatus);
router.post("/delete/:id", removeTodo);

export default router;
