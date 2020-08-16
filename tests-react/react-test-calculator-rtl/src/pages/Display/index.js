import React from "react";

import "./styles.css";

export default function Display({ displayValue }) {
  return (
    <div testid="display-container" className="display-container">
      <p testid="display-value" className="display-value">
        {displayValue}
      </p>
    </div>
  );
}
