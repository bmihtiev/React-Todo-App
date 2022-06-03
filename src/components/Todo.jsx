import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckbox() {
    toggleComplete(todo.id);
  }

  function handleRemove() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input type="checkbox" onClick={handleCheckbox} />
      <li
        style={{
          color: "#333",
          textAlign: "left",
          width: "30%",
          textDecoration: todo.completed ? "line-through" : "",
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
}

export default Todo;
