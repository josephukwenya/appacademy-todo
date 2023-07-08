import React, { useState } from "react";
import { API_BASE } from "../../utils/constant";
import axios from "axios";

const CreateTodo = ({ todos, setTodos }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = async () => {
    const token = JSON.parse(localStorage.getItem("todoApp")).token;
    try {
      const response = await axios.post(
        `${API_BASE}/todos/new`,
        {
          task: newTodo,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const result = [...todos, response.data];
      setTodos(result);
      console.log("New Todo Created: ", { result });
      setPopupActive(false);
      setNewTodo("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="addPopup" onClick={() => setPopupActive(true)}>
        +
      </div>
      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>
            x
          </div>
          <div className="content">
            <h3>Add Task</h3>
            <input
              type="text"
              className="add-todo-input"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div key={todos.id} className="button" onClick={addTodo}>
              Create Task
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CreateTodo;
