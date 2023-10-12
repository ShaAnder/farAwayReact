/**
 * Stat counter for any items we are tracking
 * @returns
 */
export default function Stats({ items }) {
  // conditional early return
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list 👀!</em>
      </p>
    );

  // derived state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numItems) * 100);

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
