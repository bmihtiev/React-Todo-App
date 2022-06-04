import React from "react";
import { useState } from "react";
import nextId from "react-id-generator";
import { IoAddSharp } from "react-icons/io5";

function TodoForm({ addTodo }) {
  const itemID = nextId("todo-");

  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: itemID });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <div>
      <form className="todo_form" onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
        <button type="submit">
          <IoAddSharp />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
