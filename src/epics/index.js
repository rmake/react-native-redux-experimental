import { combineEpics } from "redux-observable";
import loadTodos from "./loadTodos";
import saveTodos from "./saveTodos";

export default combineEpics(
    loadTodos,
    saveTodos,
);
