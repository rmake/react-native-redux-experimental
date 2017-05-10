
export const initialState = () => ({
    nextTodoId: 1,
    todos: [],
});

export const createTodo = (nextId, text) => ({
    id: nextId,
    text,
    completed: false,
});

export const toggleTodo = (todo, id) => {
    if (todo.id != id) {
        return todo;
    }
    return {
        ...todo,
        completed: !todo.completed,
    };
};

export const todos = (state = initialState(), action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                nextTodoId: state.nextTodoId + 1,
                todos: [
                    ...state.todos,
                    createTodo(state.nextTodoId, action.text),
                ]
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) => (toggleTodo(todo, action.id))),
            };
        default:
            return state;
    }
}
