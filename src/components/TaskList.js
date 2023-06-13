import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete, selectedCategory }) {

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} category={task.category} text={task.text} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default TaskList;