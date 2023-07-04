import { API_BASE } from "./constant";
import axios from "axios";

// GET /api/v1/todos
export const GetTodosAPI = async () => {
  const token = JSON.parse(localStorage.getItem("todoApp")).token;
  const data = await axios.get(`${API_BASE}/todos`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return data;
};

// PATCH /api/v1/todos/:id/complete
export const ToggleTodoAPI = async (id) => {
  const token = JSON.parse(localStorage.getItem("todoApp")).token;
  const data = await axios.patch(
    `${API_BASE}/todos/${id}/complete`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return data;
};

// DELETE /api/v1/todos/:id/delete
export const DeleteTodoAPI = async (id) => {
  const token = JSON.parse(localStorage.getItem("todoApp")).token;
  const data = await axios.delete(`${API_BASE}/todos/${id}/delete`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return data;
};
