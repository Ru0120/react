import React, { useState } from "react";
import "./App.css";
function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    setTask((t) => [...task, newTask]);
    setNewTask("");
    if (newTask.trim() !== "") {
      setTask((t) => [...task, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }
  function editTask(index) {
    const updatedTask = prompt("Edit task:", task[index]);
    if (updatedTask !== null) {
      const updatedTasks = [...task];
      updatedTasks[index] = updatedTask;
      setTask(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-task" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
              Delete
            >
              Delete
            </button>
            <button
              className="edit-button"
              onClick={() => editTask(index)}
              Edit
            >
              Edit
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
