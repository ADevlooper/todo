import { supabase } from "../config/supabase.js";
const table = "todos";

export async function getAllTodos() {
  const { data, error } = await supabase.from(table).select("*").order("id", { ascending: true });
  if (error) throw error;
  return data;
}

export async function addTodo(task, task_desc) {
  const { data, error } = await supabase.from(table).insert([{ task, task_desc }]);
  if (error) throw error;
  return data;
}

export async function toggleStatus(id, status) {
  const { data, error } = await supabase.from(table).update({ status }).eq("id", id);
  if (error) throw error;
  return data;
}

export async function deleteTodo(id) {
  const { data, error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
  return data;
}
