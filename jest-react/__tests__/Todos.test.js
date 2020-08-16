// Testar componentes quando eles se modificam baseados em alguma circunstância

import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Todos from "../src/Todos";

import configureStore from "redux-mock-store";
const mockStore = configureStore();

const initialState = {
  todos: [
    { id: 0, text: "Fazer café" },
    { id: 1, text: "Acessar o slack" },
    { id: 2, text: "Ver RocketLive" }
  ]
};

const store = mockStore(initialState);

describe("Testing Todos Component", () => {
  it("should render correctly", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
