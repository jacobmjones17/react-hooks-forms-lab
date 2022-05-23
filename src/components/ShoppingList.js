import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemName, setItemName] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  //This handles my category filter
  .filter((item) => {
    if (selectedCategory === "All") return true;
  

    return item.category === selectedCategory;
  })
  //This handles my search filter
  .filter((item) => {
    if(itemName === "") return true

    return item.name.toLowerCase().includes(itemName.toLowerCase())
    });
    
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search="testing" onCategoryChange={handleCategoryChange} onSearchChange={setItemName}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
