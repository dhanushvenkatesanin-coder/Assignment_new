import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Practice CSS"]);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}