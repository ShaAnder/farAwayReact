// ---- IMPORTS ---- //

import Item from "./item";
import { useState } from "react";

/**
 * Packing list component designed to contain our items
 * @returns
 */
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  // state for sorting / default sorting
  const [sortBy, setSortBy] = useState("input");

  // derive our sort state (use let to change between our sort values)
  let sortedItems;

  // sort by input
  if (sortBy === "input") sortedItems = items;

  // sort by description (uses locale compare and sort to sort alphabetically)
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // sort by packed status, slices string similar to above and sorts all true values down to the bottom of array
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={() => onClearItems()}>Clear list</button>
      </div>
    </div>
  );
}
