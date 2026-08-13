import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

export default function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="p-4">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          My <strong>Alert</strong>
        </Alert>
      )}
      <Button text={"Show Alert"} onClick={() => setAlertVisibility(true)} />
    </div>
  );
}
