import React from "react";
import { shallow, mount } from "enzyme";

import Calculator from "../../src/pages/Calculator";
import Display from "../../src/pages/Display";
import Keypad from "../../src/pages/Keypad";

describe("Calculator", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a <div>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Display and Keypad Component", () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Display
          displayValue={wrapper.props().displayValue}
          setDisplayValue={wrapper.props().setDisplayValue}
        />,
        <Keypad
          //
          numbers={wrapper.props().numbers}
          setNumbers={wrapper.props().setNumbers}
          //
          operators={wrapper.props().operators}
          setOperators={wrapper.props().setOperators}
          //
          callOperator={wrapper.props().callOperator}
          setOperator={wrapper.props().setOperator}
          updateDisplay={wrapper.props().updateDisplay}
        />
      ])
    ).toEqual(true);
  });
});

describe("updateDisplay", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Calculator />);
  });

  it("should updates displayValue", () => {
    wrapper
      .find(".number-key")
      .at(4)
      .simulate("click");

    expect(wrapper.find(".display-value").text()).toEqual("5");
  });

  it("should concatenates displayValue", () => {
    wrapper
      .find(".number-key")
      .at(4)
      .simulate("click");
    wrapper
      .find(".number-key")
      .at(10)
      .simulate("click");

    expect(wrapper.find(".display-value").text()).toEqual("50");
  });

  it('should removes loading "0" from displayValue', () => {
    wrapper
      .find(".number-key")
      .at(10)
      .simulate("click");

    expect(wrapper.find(".display-value").text()).toEqual("0");

    wrapper.update();
    wrapper
      .find(".number-key")
      .at(4)
      .simulate("click");

    expect(wrapper.find(".display-value").text()).toEqual("5");
  });

  it('should prevents multiple instances of "." in display value', () => {
    wrapper
      .find(".number-key")
      .at(9)
      .simulate("click");
    wrapper
      .find(".number-key")
      .at(9)
      .simulate("click");

    expect(wrapper.find(".display-value").text()).toEqual(".");
  });

  it("should removes last char of displayValue", () => {
    wrapper
      .find(".number-key")
      .at(4)
      .simulate("click");
    wrapper
      .find(".number-key")
      .at(10)
      .simulate("click");
    wrapper
      .find(".number-key")
      .at(11)
      .simulate("click");

    expect(wrapper.find(".display-value").text()).toEqual("5");
  });

  it('should will set displayValue to "0" if displayValue is equal to a empty string', () => {
    wrapper
      .find(".number-key")
      .at(11)
      .simulate("click");

    expect(wrapper.find(".display-value").text()).toEqual("0");
  });

  it('should prevents multiple leaging "0"s from displayValue', () => {
    wrapper
      .find(".number-key")
      .at(10)
      .simulate("click");
    wrapper
      .find(".number-key")
      .at(10)
      .simulate("click");

    expect(wrapper.find(".display-value").text()).toEqual("0");
  });
});

// Mounted Calculator
{
  // describe("Mounted calculator", () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = mount(<Calculator />);
  // });
  // it("should calls updateDisplay when a number key is clicked", () => {
  //   wrapper.updateDisplay = jest.fn();
  //   const spy = jest.spyOn(wrapper, "updateDisplay");
  //   wrapper.update();
  //   wrapper
  //     .find(".number-key")
  //     .first()
  //     .simulate("click");
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
  // it("should calls setOperator when a operator key is clicked", () => {
  //   wrapper.setOperator = jest.fn();
  //   const spy = jest.spyOn(wrapper, "setOperator");
  //   wrapper.update();
  //   wrapper
  //     .find(".operator-key")
  //     .first()
  //     .simulate("click");
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
  // it("should calls callOperator when the submit key is clicked", () => {
  //   wrapper.callOperator = jest.fn();
  //   const spy = jest.spyOn(wrapper, "callOperator");
  //   wrapper.update();
  //   wrapper
  //     .find(".submit-key")
  //     .first()
  //     .simulate("click");
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
  // });
}
