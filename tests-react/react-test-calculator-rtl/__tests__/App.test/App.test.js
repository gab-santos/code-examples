import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "../../src/pages/App";

describe("App", () => {
  beforeEach(() => {
    cleanup();
  });

  // it("should render correctly", () => {
  //   const { container } = render(<App />);
  //   expect(container).toMatchSnapshot();
  // });

  it("should render the Calculator Component", () => {
    const { getByTestId, container } = render(<App />);
    const calculator = getByTestId("calculator-container");
    expect(container).toContainElement(calculator);
  });
});
