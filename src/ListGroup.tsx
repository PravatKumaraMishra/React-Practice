import { useState } from "react";

export default function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const items: string[] = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Heading</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            onClick={() => setSelectedIndex(index)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
