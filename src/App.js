// ---- IMPORTS ---- //

// state imports
import { useState } from "react";

// components
import Logo from "./components/logo";
import Form from "./components/form";
import PackingList from "./components/packinglist";
import Stats from "./components/stats";

/**
 * App component, main component all others feed here for runtime,
 * renders the entire screen and contains main handler / state uplift
 * functions for all common children
 * @returns jsx used to render the app, all our components are placed
 * inside this
 * @author ShaAnder
 */
export default function App() {
  const [items, setItems] = useState([]);

  // function to add items, spreads current array into new one, adds new item on end
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // function to delete an item, creates a new array and only adds items with non same id
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // function to handle item toggling, maps over item array and then creates a new one with the items that are packed set to true
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Function to reset the item array, does a window confirmation, if ok, sets item array to []
  function handleClearItems() {
    const confirmed = window.confirm("Are you sure you want to clear list?");

    if (confirmed) setItems([]);
  }

  // returns our jsx with all our components and props passed to them
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
