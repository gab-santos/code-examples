import { createStore, combineReducers } from "redux";
import todos from "./reducers";

export default createStore(combineReducers({ todos }));
