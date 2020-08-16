import React from "react";
import { cleanup, render } from "@testing-library/react";
import Display from "../../src/pages/Display";

describe("Display", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render correctly", () => {
    const { container } = render(<Display />);
    expect(container).toMatchSnapshot();
  });

  it("should renders the value of displayValue", () => {
    const { getByTestId } = render(<Display displayValue={"test"} />);
    const displayValue = getByTestId("display-value");

    expect(displayValue).toBeInTheDocument();
    expect(displayValue.textContent).toBe("test");
  });
});
