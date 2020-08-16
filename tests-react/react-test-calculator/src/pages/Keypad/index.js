import React from "react";

import "./styles.css";
import Key from "../Key";

export default function Keypad({
  numbers,
  operators,
  callOperator,
  setOperator,
  updateDisplay
}) {
  const numberKeys = numbers.map(number => (
    <Key
      key={number}
      keyAction={updateDisplay}
      keyType="number-key"
      keyValue={number}
    />
  ));

  const operatorKeys = operators.map(operator => (
    <Key
      key={operator}
      keyAction={setOperator}
      keyType="operator-key"
      keyValue={operator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <div className="submit-container">
        <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
}
