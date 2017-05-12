import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import TodoPage from "./components/TodoPage";

export default (
    <Route exact path="/(:filter)" component={TodoPage}/>

)
