import {
    addTodo,
    toggleTodo,
    removeTodo,
    clearTodo,
    loadTodos,
    loadTodosSuccess,
    loadTodosNoData,
    loadTodosFailed,
    saveTodos,
    saveTodosSuccess,
    saveTodosFailed,
    setVisibilityFilter
} from ".";

describe("todo action", () => {
    it("addTodo should create ADD_TODO action", () => {
        expect(addTodo("first task")).toEqual({
            type: "ADD_TODO",
            text: "first task",
        });
    });
    it("toggleTodo should create TOGGLE_TODO action", () => {
        expect(toggleTodo(1)).toEqual({
            type: "TOGGLE_TODO",
            id: 1,
        });
    });

    it("removeTodo should create REMOVE_TODO action", () => {
        expect(removeTodo(1)).toEqual({
            type: "REMOVE_TODO",
            id: 1,
        });
    });

    it("clearTodo should create CLEAR_TODO action", () => {
        expect(clearTodo()).toEqual({
            type: "CLEAR_TODO",
        });
    });

    it("loadTodos should create LOAD_TODOS action", () => {
        expect(loadTodos()).toEqual({
            type: "LOAD_TODOS",
        });
    });

    it("loadTodosSuccess should create LOAD_TODOS_SUCCESS action", () => {
        expect(loadTodosSuccess({
            nextTodoId: 1,
            todos: [],
        })).toEqual({
            type: "LOAD_TODOS_SUCCESS",
            todos: {
                nextTodoId: 1,
                todos: [],
            }
        });
    });

    it("loadTodosNoData should create LOAD_TODOS_NO_DATA action", () => {
        expect(loadTodosNoData()).toEqual({
            type: "LOAD_TODOS_NO_DATA",
        });
    });

    it("loadTodosFailed should create LOAD_TODOS_FAILED action", () => {
        expect(loadTodosFailed(new Error("some error"))).toEqual({
            type: "LOAD_TODOS_FAILED",
            error: new Error("some error"),
        });
    });

    it("saveTodos should create SAVE_TODOS action", () => {
        expect(saveTodos({
            nextTodoId: 1,
            todos: [],
        })).toEqual({
            type: "SAVE_TODOS",
            todos: {
                nextTodoId: 1,
                todos: [],
            },
        });
    });

    it("saveTodosSuccess should create SAVE_TODOS_SUCCESS action", () => {
        expect(saveTodosSuccess()).toEqual({
            type: "SAVE_TODOS_SUCCESS",
        });
    });

    it("saveTodosFailed should create SAVE_TODOS_FAILED action", () => {
        expect(saveTodosFailed(new Error("some error"))).toEqual({
            type: "SAVE_TODOS_FAILED",
            error: new Error("some error"),
        });
    });
});

describe("visibility filter action", () => {
    it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
        expect(setVisibilityFilter("SHOW_ALL")).toEqual({
            type: "SET_VISIBILITY_FILTER",
            filter: "SHOW_ALL",
        });
    });
})
