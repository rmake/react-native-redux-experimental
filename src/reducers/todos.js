import TodosModel from "../models/TodosModel";
import TodoModel from "../models/TodoModel";
import { List } from "immutable";

export const initialState = () => (new TodosModel());


export const toggleTodo = (todo, id) => {
    if (todo.id != id) {
        return todo;
    }
    return {
        ...todo,
        completed: !todo.completed,
    };
};

export const removeTodo = (todos, id) => {
    return todos.filter(todo => todo.id != id);
}

export const todos = (state = initialState(), action) => {

    switch(action.type) {
        case "ADD_TODO":
            return state.add(action.text);
        case "TOGGLE_TODO":
            return state.set("todos",
                state.todos.map((todo) => (todo.toggle(action.id))));
        case "REMOVE_TODO":
            return state.set("todos",
                removeTodo(state.todos, action.id));
        case "CLEAR_TODO":
            return state.set("todos", []);
        case "LOAD_TODOS_SUCCESS":
            return TodosModel.create(action.todos);
        default:
            return state;
    }
}
