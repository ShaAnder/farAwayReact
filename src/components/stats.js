/**
 * Stat counter for tracking our items to pack / packed
 * @param {*} items -> the items currently created in our app
 * @returns jsx for rendering the stats / footer
 * @author ShaAnder
 */
export default function Stats({ items }) {
  // conditional early return, if no items in list return this prompt line for user
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list 👀!</em>
      </p>
    );

  // Derived state, did not need to make new state so we get what we want by deriving it from original.

  // get the number of items
  const numItems = items.length;
  // filter so only packed items first
  const numPacked = items.filter((item) => item.packed).length;
  // get a % of all packed items
  const numPercent = Math.round((numPacked / numItems) * 100);

  // jsx for stats
  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? "You've got everything! You're good to go ✈️"
          : `💼 You Have ${numItems} items on your list, you have packed ${numPacked} (
          ${numPercent}%)`}
      </em>
    </footer>
  );
}
