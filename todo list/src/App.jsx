import React, { useState } from "react"; // Import React
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 to generate unique IDs

import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  // Function to handle form submission and add a new todo
  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem.trim()) return; // Prevent adding empty items
    const newTodo = {
      id: uuidv4(), // Generate a unique ID for the new todo
      title: newItem,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setNewItem(""); // Clear the input field after adding the todo
  }

  // Function to handle todo deletion
  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button type="submit" className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>{todo.title}</label>
            <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
