import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);
  

  function handleTaskFormSubmit (newTaskObject) {
    setTasks([...tasks, newTaskObject]);
  }

  function handleCategoryClick(category) {
    setSelectedCategory(category)
  }

  function handleRemoveTask (removedTaskText) {
    setTasks(tasks.filter(task => task.text !== removedTaskText));
  }

  


  const visibleTasks = tasks.filter(task => selectedCategory === "All" || task.category === selectedCategory);



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onCategoryClick={handleCategoryClick} 
        selectedCategory={selectedCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={visibleTasks} onRemoveTask={handleRemoveTask}/>
    </div>
  );
}

export default App;
