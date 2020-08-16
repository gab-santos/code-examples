import React, { useState } from "react";

import "./styles.css";
import Display from "../Display";
import Keypad from "../Keypad";

export default function Calculator() {
  // value to be displayed in <Display />
  const [displayValue, setDisplayValue] = useState("0");

  // value to be displayed in <Keys />
  const [numbers, setNumbers] = useState([]);

  // value to be displayed in operator <Keys />
  const [operators, setOperators] = useState([]);

  // operator selected for math operation
  const [selectedOperator, setSelectedOperator] = useState("");

  // stored value to use for math operation
  const [storedValue, setStoredValue] = useState("");

  function updateDisplay() {
    console.log("Update display");
  }

  function callOperator() {
    console.log("Call operation");
  }

  function setOperator() {
    console.log("Set operation");
  }

  return (
    <div testid="calculator-container" className="calculator-container">
      <Display displayValue={displayValue} />
      <Keypad numbers={numbers} operators={operators} />
    </div>
  );
}
