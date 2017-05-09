import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Main from "./components/Main";

const store = createStore(reducer);

const Boot = () => (
    <Main />
);

export default Boot;
