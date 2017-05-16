import { combineReducers } from "redux";
import { todos } from "./todos";
import { storage } from "./storage";

const todoApp = (state = {}, action) => ({
    ...state,
    todos: todos(state.todos, action),
    storage: storage(state.storage, action),
});

export default todoApp;
