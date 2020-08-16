import React from "react";
import { shallow } from "enzyme";
import Display from "../../src/pages/Display";

describe("Display", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Display displayValue={""} setDisplayValue={""} />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should renders the value of displayValue", () => {
    wrapper.setProps({ displayValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
