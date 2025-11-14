import { getAllTodos, addTodo, toggleStatus, deleteTodo } from "../models/todoModel.js";

export async function showTodos(req, res) {
  try {
    const todos = await getAllTodos();
    res.render("index", { todos });
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).send("Error loading tasks");
  }
}

export async function createTodo(req, res) {
  try {
    const { task, task_desc } = req.body;
    await addTodo(task, task_desc); 
    res.redirect("/"); 
  } catch (err) {
    console.error("Error adding todo:", err);
    res.status(500).send("Error adding task");
  }
}

export async function updateTodoStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await toggleStatus(id, status === "true");
    res.redirect("/");
  } catch (err) {
    console.error("Error updating status:", err);
    res.status(500).send("Error updating status");
  }
}

export async function removeTodo(req, res) {
  try {
    const { id } = req.params;
    await deleteTodo(id);
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).send("Error deleting task");
  }
}
