import { useState } from "react";

function TodoListConditional() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      {todos.length === 0 ? (
        <p>No Todos yet</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}