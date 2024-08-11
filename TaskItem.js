
import React from 'react';

const TaskItem = ({ task, onDelete, onEdit, onToggleComplete }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
