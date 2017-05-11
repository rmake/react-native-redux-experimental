import { combineEpics } from "redux-observable";
import loadTodos from "./loadTodos";

export default combineEpics(
    loadTodos
);
