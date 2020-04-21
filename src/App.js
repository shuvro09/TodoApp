import React from 'react';
import './App.css';
import TodoForm from './Component/TodoForm';
function App() {
  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <TodoForm className="todoForm" />
    </div>
  );
}

export default App;
