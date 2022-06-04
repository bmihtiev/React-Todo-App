import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckbox() {
    toggleComplete(todo.id);
  }

  function handleRemove() {
    removeTodo(todo.id);
  }

  return (
    <li>
      <span
        style={{
          color: "#333",
          textAlign: "left",

          textDecoration: todo.completed ? "line-through" : "",
        }}
      >
        <input
          type="checkbox"
          onClick={handleCheckbox}
          checked={todo.completed ? "checked" : ""}
        />
        {todo.task}
      </span>
      <button onClick={handleRemove}>
        <TiDeleteOutline />
      </button>
    </li>
  );
}

export default Todo;
