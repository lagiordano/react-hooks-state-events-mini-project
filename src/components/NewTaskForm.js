import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Code");

  function handleTextChange (e) {
    setNewTaskText(e.target.value)
  }

  function handleCategoryChange (e) {
    setNewTaskCategory(e.target.value);
  }

  

  const optionElements = categories.map(category => {
    if (category !== 'All') {
     return <option key={category}>{category}</option>
    }
  })

  function handleSubmit (e) {
    e.preventDefault();
    const newTask = {
      text: newTaskText,
      category: newTaskCategory
    }
    onTaskFormSubmit(newTask);
    setNewTaskCategory("Code");
    setNewTaskText("");
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTaskText} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTaskCategory} onChange={handleCategoryChange}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
