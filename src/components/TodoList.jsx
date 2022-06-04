import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
