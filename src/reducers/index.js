import { combineReducers } from "redux";
import { todos } from "./todos";

const todoApp = (state = {}, action) => ({
    ...state,
    todos: todos(state.todos, action),
});

export default todoApp;
