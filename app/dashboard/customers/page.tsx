"use client"

import { useState } from "react";

export default function Page() {
  // Initial list of car brands.
  const [carBrands, setCarBrands] = useState(["BMW", "Mazda", "Nissan"]);
  // State for the current text input.
  const [newCar, setNewCar] = useState("");

  // Function to add a new car to the list.
  const handleAddCar = () => {
    if (newCar.trim() !== "") {
      setCarBrands([...carBrands, newCar.trim()]);
      setNewCar(""); // Clear the input after adding.
    }
  };

  // Function to compute the output string.
  const getOutput = () => {
    if (carBrands.length === 0) {
      return "No car brands available";
    }
    // If there's only one brand, return it directly.
    if (carBrands.length === 1) {
      return carBrands[0];
    }
    // For multiple brands, remove the last element and join the rest.
    const brandsCopy = [...carBrands];
    const last = brandsCopy.pop();
    const firstPart = brandsCopy.join(", ");
    return firstPart + " and " + last;
  };

  return (
    <div>
      <input
        type="text"
        id="textName"
        placeholder="Enter a car brand"
        value={newCar}
        onChange={(e) => setNewCar(e.target.value)}
      />
      <button onClick={handleAddCar}>Add Car</button>
      <div id="output">{getOutput()}</div>
    </div>
  );
}
