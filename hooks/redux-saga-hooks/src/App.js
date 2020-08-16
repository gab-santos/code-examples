import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import CoursesList from "./components/CoursesList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Course List</h1>
        <CoursesList />
      </div>
    </Provider>
  );
}

export default App;
