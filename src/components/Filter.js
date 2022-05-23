import React from "react";

function Filter({ onCategoryChange, onSearchChange, search, }) {

  function handleTypeChange(event) {
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" value={search} name="search" placeholder="Search..." onChange={handleTypeChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
