export default function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const items: string[] = [];

  return (
    <>
      <h1>Heading</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            onClick={(event: React.MouseEvent) => {
              console.log(event.type); // Event type
              console.log(event.clientX); // Click position X
              console.log(event.clientY); // Click position Y
              console.log(event.target); // Clicked element
              console.log(item, index);
            }}
            className="list-group-item"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
