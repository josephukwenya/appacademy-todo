import React from "react";
import { ToggleTodoAPI, DeleteTodoAPI } from "../../utils/api";

const TodoItem = ({ todo, setTodos }) => {
  const toggleTodo = async (id) => {
    try {
      const result = await ToggleTodoAPI(id);
      console.log(result);
      setTodos((todos) =>
        todos.map((todo) => {
          if (todo.id === result.data.id) {
            todo.complete = result.data.complete;
          }
          return todo;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await DeleteTodoAPI(id);
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div
        className={"todo " + (todo.complete ? "is-complete" : "")}
        key={todo.id}
        onClick={() => toggleTodo(todo.id)}>
        <div className="checkbox"></div>

        <div className="task">{todo.task}</div>
        <div className="delete-todo" onClick={() => deleteTodo(todo.id)}>
          x
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
