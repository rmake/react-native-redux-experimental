import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { StyleSheet } from 'react-native';
import Main from "./containers/Main";
import reducer from "./reducers";
import sateLocalStorage from "./middleware/stateLocalStorage";
import { createEpicMiddleware } from "redux-observable";
import rootEpics from "./epics";

const epicMiddleware = createEpicMiddleware(rootEpics);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            sateLocalStorage,
            epicMiddleware
        )
    )
);

const Boot = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

export default Boot;
