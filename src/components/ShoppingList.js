import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const [textFilter, setTextFilter] = useState("")

  function handleTextFilter(event){
      setTextFilter(event.target.value)
  }

  const FilteredItemsToDisplay = itemsToDisplay.filter((item) => {
    if (textFilter == ""){
      return true
    }else if(item.name.toUpperCase().includes(textFilter.toUpperCase())){
      return true
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} 
      onSearchChange = {handleTextFilter} 
      search = {textFilter}
      />
      <ul className="Items">
        {FilteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
