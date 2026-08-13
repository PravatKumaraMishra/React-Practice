export default function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>Heading</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
