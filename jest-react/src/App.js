import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Todos from "./Todos";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Hello World :)</h2>
        <Todos />
      </div>
    </Provider>
  );
}
