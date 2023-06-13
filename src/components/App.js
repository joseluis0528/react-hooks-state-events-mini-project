import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All")
  console.log(tasks);

  function handleClick(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory
  })

  function handleDeleteTask(index) {
    setTasks((tasks) => {
      const newTaskList = [...tasks];
      newTaskList.splice(index, 1);
      return newTaskList;
    });
  }

  function handleNewTask(newTaskData) {
    setTasks([...tasks, newTaskData]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onFilter={handleClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;