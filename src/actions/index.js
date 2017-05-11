
export const addTodo = (text) => ({
    type: "ADD_TODO",
    text,
});

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id,
});

export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    id,
});

export const clearTodo = () => ({
    type: "CLEAR_TODO",
});

export const checkInitialTodos = () => ({
    type: "CHECK_INITIAL_TODOS",
});

export const loadTodos = () => ({
    type: "LOAD_TODOS",
});

export const loadTodosFulfilled = (todos) => ({
    type: "LOAD_TODOS_FULFILLED",
    todos,
});

export const loadTodosFailed = () => ({
    type: "LOAD_TODOS_FAILED",
});

export const setVisibilityFilter = (filter) => ({
    type: "SET_VISIBILITY_FILTER",
    filter,
});
