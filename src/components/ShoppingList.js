import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");

  function onSearchChange(e) {
    setSearchItem(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      if (item.name.toLowerCase().includes(searchItem.toLowerCase()) || searchItem === "") return true;
    } 

    else if (item.category === selectedCategory) {
      if (item.name.toLowerCase().includes(searchItem.toLowerCase()) || searchItem === "") return true;
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={searchItem} onSearchChange={onSearchChange}  />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
