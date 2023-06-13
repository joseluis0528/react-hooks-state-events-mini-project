import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTaskData, setNewTaskData] = useState({
    text: "",
    category: "Code",
  });

  function handleNewTaskDetails(e) {
    setNewTaskData({...newTaskData, text: e.target.value})
  }

  function handleNewTaskCategory(e) {
    setNewTaskData({...newTaskData, category: e.target.value})
  }

  function handleNewTaskSubmission(e) {
    e.preventDefault();
    onTaskFormSubmit(newTaskData);
  }
  
  return (
    <form className="new-task-form" onSubmit={handleNewTaskSubmission}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTaskDetails}/>
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => (
            category === "All" ? null : <option key={category} value={category} onChange={handleNewTaskCategory}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;