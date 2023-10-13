/**
 * Function for the items being created, these are created inside the packing list and the data is passed to them
 * @param {*} item -> item to be made, toggle and delete functions
 * @returns jsx for item rendering
 * @author ShaAnder
 */
export default function Item({ item, onDeleteItem, onToggleItem }) {
  // jsx with our new item
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
