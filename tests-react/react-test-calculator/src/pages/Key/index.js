import React from "react";

import "./styles.css";

export default function Key({ keyAction, keyType, keyValue }) {
  return (
    <div
      className={`key-container ${keyType}`}
      onClick={() => keyAction(keyValue)}
    >
      <p className="key-value">{keyValue}</p>
    </div>
  );
}
