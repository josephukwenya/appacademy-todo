import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import TodoItem from "../TodoItem/TodoItem";
import { GetTodosAPI } from "../../utils/api";
import CreateTodo from "../CreateTodo/CreateTodo";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const result = await GetTodosAPI();
      setTodos(result.data);
    }
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="todos shadow">
        {todos.map((todo) => (
          <TodoItem setTodos={setTodos} key={todo.id} todo={todo} />
        ))}
      </div>
      <CreateTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
