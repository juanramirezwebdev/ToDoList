import React, { useState } from 'react';
import './App.css'; 

type Todo = {
  id: number;
  text: string;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: newTodo.trim() },
    ]);
    setNewTodo('');
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
