interface Props {
  items: string[];
  heading: string;
  selectedIndex: number;
  onSelectItem: (index: number) => void;
}

export default function ListGroup({
  items,
  heading,
  onSelectItem,
  selectedIndex,
}: Props) {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onSelectItem(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
