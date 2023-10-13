// ---- IMPORTS ---- //

import { useState } from "react";

/**
 * Form component that handles the item submission as well as quantity,
 * will take the item passed in and pass it on
 * @param {*} onAddItems function, function that calls state to set
 * item (state uplifting) which is then passed to packing list
 * @returns jsx for the form submission / quantity field
 * @author ShaAnder
 */
export default function Form({ onAddItems }) {
  // get our form state
  const [description, setDescription] = useState("");
  const [quantity, setQuantitiy] = useState(1);

  // handler function for form submission
  function handleSubmit(e) {
    e.preventDefault();

    // if field empty early return
    if (!description) return;

    // new item variable with our fields
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // state uplifting, pass new item into prop function so that state can be sent up the chain
    onAddItems(newItem);

    // clear fields
    setDescription("");
    setQuantitiy(1);
  }

  // return form jsx, uses some js for event handlers and setting item count max to 20
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantitiy(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
