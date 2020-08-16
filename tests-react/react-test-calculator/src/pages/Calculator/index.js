import React, { useState } from "react";

import "./styles.css";
import Display from "../Display";
import Keypad from "../Keypad";

export default function Calculator() {
  // value to be displayed in <Display />
  let [displayValue, setDisplayValue] = useState("0");

  // value to be displayed in <Keys />
  const [numbers, setNumbers] = useState([
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    ".",
    "0",
    "ce"
  ]);

  // value to be displayed in operator <Keys />
  const [operators, setOperators] = useState(["/", "*", "-", "+"]);

  // operator selected for math operation
  const [selectedOperator, setSelectedOperator] = useState("");

  // stored value to use for math operation
  const [storedValue, setStoredValue] = useState("");

  function updateDisplay(value) {
    // prevet multiple ocorrences of "."
    if (value === "." && displayValue.includes(".")) value = "";

    if (value === "ce") {
      // delete last char in displayValue
      setDisplayValue(displayValue.substr(0, displayValue.length - 1));
      // set display value to '0' if displayValue is empty string
      if (displayValue === "0") setDisplayValue("0");
    } else {
      displayValue === "0"
        ? // replace displayValue with value if display value equal to '0'
          // else concatenate displayValue and value
          setDisplayValue(value)
        : setDisplayValue((displayValue += value));
    }
  }

  function callOperator() {
    console.log("Call operation");
  }

  function setOperator() {
    console.log("Set operation");
  }

  return (
    <div className="calculator-container">
      <Display displayValue={displayValue} setDisplayValue={setDisplayValue} />
      <Keypad
        numbers={numbers}
        setNumbers={setNumbers}
        operators={operators}
        setOperators={setOperators}
        callOperator={callOperator}
        setOperator={setOperator}
        updateDisplay={updateDisplay}
      />
    </div>
  );
}
