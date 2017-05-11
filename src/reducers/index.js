import { combineReducers } from "redux";
import { todos } from "./todos";
import { visibilityFilter } from "./visibilityFilter";
import { storage } from "./storage";

const todoApp = (state = {}, action) => ({
    ...state,
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    storage: storage(state.storage, action),
});

export default todoApp;
