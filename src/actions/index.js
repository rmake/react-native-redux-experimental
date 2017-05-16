
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

export const loadTodosSuccess = (todos) => ({
    type: "LOAD_TODOS_SUCCESS",
    todos,
});

export const loadTodosNoData = () => ({
    type: "LOAD_TODOS_NO_DATA",
});

export const loadTodosFailed = (error) => ({
    type: "LOAD_TODOS_FAILED",
    error,
});

export const saveTodos = (todos) => ({
    type: "SAVE_TODOS",
    todos,
});

export const saveTodosSuccess = () => ({
    type: "SAVE_TODOS_SUCCESS",
});

export const saveTodosFailed = (error) => ({
    type: "SAVE_TODOS_FAILED",
    error,
});
