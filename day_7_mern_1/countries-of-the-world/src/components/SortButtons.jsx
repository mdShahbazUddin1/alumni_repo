// src/components/SortButtons.jsx
import React from "react";

const SortButtons = ({ countries, setCountries }) => {
  const sortAscending = () => {
    const sortedCountries = [...countries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setCountries(sortedCountries);
  };

  const sortDescending = () => {
    const sortedCountries = [...countries].sort((a, b) =>
      b.name.common.localeCompare(a.name.common)
    );
    setCountries(sortedCountries);
  };

  return (
    <div>
      <button onClick={sortAscending}>Sort A-Z</button>
      <button onClick={sortDescending}>Sort Z-A</button>
    </div>
  );
};

export default SortButtons;
