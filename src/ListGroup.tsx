export default function ListGroup() {
  //   const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const items: string[] = [];

  return (
    <>
      <h1>Heading</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
