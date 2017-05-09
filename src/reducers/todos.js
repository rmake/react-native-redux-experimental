
var initialState = () => ({
    nextTodoId: 1,
    todos: [],
});

const createTodo= (nextId, text) => ({
    {
        id: nextId,
        text,
        completed: false,
    }
});


const todos = (state = initialState(), action) => {

    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                nextTodoId: state.nextTodoId + 1,
                todos: [
                    state.todos...,
                    createTodo(state.nextTodoId, action.text),
                ]
            }
        default:
            return state;
    }
}
