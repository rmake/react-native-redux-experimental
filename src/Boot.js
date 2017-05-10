import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Main from "./components/Main";
import reducer from "./reducers"

const store = createStore(reducer);

const Boot = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

export default Boot;
