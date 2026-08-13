import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: "94110",
    },
  });

  const handleSetCustomer = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: "94112",
      },
    });
  };

  return (
    <div className="p-4">
      <div>Name: {customer.name}</div>
      <div>
        Address:
        <div>{customer.address.city}</div>
        <div>{customer.address.zipCode}</div>
      </div>
      <Button text={"Update Zip Code"} onClick={handleSetCustomer} />
    </div>
  );
}
