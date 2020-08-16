import React from "react";

import "./styles.css";

export default function Display({ displayValue, setDisplayValue }) {
  return (
    <div className="display-container">
      <p className="display-value">{displayValue}</p>
    </div>
  );
}
