import React from "react";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useState(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todo-app"));
    if (storageTodos) setTodos(storageTodos);
  }, []);

  useEffect(() => {
    // storing input name
    localStorage.setItem("todo-app", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            completed: !todo.completed,
          };
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>

      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
