import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  // const[copiedItems,setCopiedItems]
  const [isDarkMode, setIsDarkMode] = useState(false);



  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function onItemFormSubmit(newItem){
    const updatedArray=[...items,newItem]
    setItems(updatedArray)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={onItemFormSubmit}/>
    </div>
  );
}

export default App;
