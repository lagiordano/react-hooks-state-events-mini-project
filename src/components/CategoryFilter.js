import React from "react";

function CategoryFilter({categories, onCategoryClick, selectedCategory}) {

  const buttonCategories = categories.map(category => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button 
        key={category} 
        className={className}
        onClick={() => onCategoryClick(category)}
      >
        {category}
      </button>
    );
  });



  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonCategories}
    </div>
  );
}

export default CategoryFilter;
