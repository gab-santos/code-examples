import React from "react";
import { shallow, mount } from "enzyme";
import Keypad from "../../src/pages/Keypad";

/*
  O shallow só vai uma camada mais fundo e retorna o conteúdo do componente
  sendo renderizado superfialmente e não do componente filho.
  Para essa funcionalidade podemos utilizar o mount que faz uma renderização
  completa do DOM e nos permite obter os valores de texto dos elementos filhos.
  Passamos esses testes para uma describe própria para evitar chamadas
  desnecessárias para o shallow.
*/

describe("keypad", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        numbers={[]}
        setNumbers={[]}
        //
        operators={[]}
        setOperators={[]}
        //
        callOperator={jest.fn()}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 4 <div />'s", () => {
    // expect(wrapper.find("div").length).toEqual(3);
    expect(wrapper.find("div")).toHaveLength(4);
  });

  it("should render an instance of the Key Component for each index of numbers, operators, and the submit key", () => {
    const numbers = ["0", "1"];
    const operators = ["+", "-"];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({ numbers, operators });
    expect(wrapper.find("Key")).toHaveLength(keyTotal);
  });
});

describe("Mounted keypad", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Keypad
        numbers={[]}
        setNumbers={[]}
        //
        operators={[]}
        setOperators={[]}
        //
        callOperator={jest.fn()}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });
  it("should renders the value of numbers to the DOM", () => {
    wrapper.setProps({ numbers: ["0", "1", "2"] });
    expect(wrapper.find(".numbers-container").text()).toEqual("012");
  });

  it("should renders the values of operators to the DOM", () => {
    wrapper.setProps({ operators: ["+", "-", "*", "/"] });
    expect(wrapper.find(".operators-container").text()).toEqual("+-*/");
  });
});
