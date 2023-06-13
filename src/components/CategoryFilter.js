import React from "react";

function CategoryFilter({ categories, selectedCategory, onFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((index) => (
        <button key={index} className={selectedCategory === index ? "selected" : ""} onClick={() => onFilter(index)}>{index}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;