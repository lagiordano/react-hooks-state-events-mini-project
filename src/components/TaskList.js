import React from "react";
import Task from "./Task";

function TaskList({tasks, onRemoveTask}) {


  const taskElements = tasks.map(task => 
    <Task 
      key={task.text} 
      category={task.category} 
      text={task.text} 
      onRemoveTask={onRemoveTask}
    />
  );
  
  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
