import React from "react";
import { cleanup, render } from "@testing-library/react";
import Calculator from "../../src/pages/Calculator";

describe("Calculator", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render the Display and Keypad Component", () => {
    const { getByTestId, container } = render(<Calculator />);
    const display = getByTestId("display-container");
    const keypad = getByTestId("keypad-container");
    expect(container).toContainElement(display);
    expect(container).toContainElement(keypad);
  });
});
