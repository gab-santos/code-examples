import React from "react";
import { cleanup, render } from "@testing-library/react";
import Keypad from "../../src/pages/Keypad";

describe("Keypad", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render Keypad Component", () => {
    const { container } = render(<Keypad numbers={""} operators={""} />);
    expect(container).toBeInTheDocument();
  });
});
