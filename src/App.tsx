import { useState } from "react";
import ListGroup from "./ListGroup";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const cities = ["New York", "San Francisco", "Tokyo"];

  const handleSelectItem = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="p-4">
      <ListGroup
        items={cities}
        heading={"Cities"}
        selectedIndex={selectedIndex}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
