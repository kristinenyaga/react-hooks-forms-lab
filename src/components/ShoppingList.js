import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[searchItem,setSearchItem] =useState("")
  
  function handleCategoryChange(event) {
    console.log(event.target)
    setSelectedCategory(event.target.value);
  }
  function handleSearch(e){
    console.log(e.target)
    setSearchItem(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const filteredItems = itemsToDisplay.filter(item =>{
    return item.name.toLowerCase().includes(searchItem.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} searchItem={searchItem} onSearchChange={handleSearch} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
