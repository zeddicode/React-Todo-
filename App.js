
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, description) => {
    const newTask = {
      id: Date.now(),
      name,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, name, description) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name, description } : task
      )
    );
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditClick = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
      />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={handleEditClick}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
