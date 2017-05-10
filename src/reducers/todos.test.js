import {todos, initialState} from "./todos"

describe("todo reducer", () => {
    it("should handle initial state", () => {
        expect(
            todos(undefined, {}),
        ).toEqual(initialState());
    });

    it("should handle ADD_TODO", () => {
        expect(
            todos(initialState(), {
                type: "ADD_TODO",
                text: "First Task",
            })
        ).toEqual({
            nextTodoId: 2,
            todos: [
                {
                    id: 1,
                    text: "First Task",
                    completed: false,
                }
            ]
        });

        expect(
            todos({
                nextTodoId: 2,
                todos: [
                    {
                        id: 1,
                        text: "First Task",
                        completed: false,
                    }
                ]
            }, {
                type: "ADD_TODO",
                text: "Second Task",
            })
        ).toEqual({
            nextTodoId: 3,
            todos: [
                {
                    id: 1,
                    text: "First Task",
                    completed: false,
                },
                {
                    id: 2,
                    text: "Second Task",
                    completed: false,
                },
            ]
        });

        expect(
            todos({
                nextTodoId: 3,
                todos: [
                    {
                        id: 1,
                        text: "First Task",
                        completed: false,
                    },
                    {
                        id: 2,
                        text: "Second Task",
                        completed: false,
                    },
                ]
            }, {
                type: "ADD_TODO",
                text: "Third Task",
            })
        ).toEqual({
            nextTodoId: 4,
            todos: [
                {
                    id: 1,
                    text: "First Task",
                    completed: false,
                },
                {
                    id: 2,
                    text: "Second Task",
                    completed: false,
                },
                {
                    id: 3,
                    text: "Third Task",
                    completed: false,
                },
            ]
        });
    });

    it("should handle TOGGLE_TODO", () => {
        expect(
            todos({
                nextTodoId: 3,
                todos: [
                    {
                        id: 1,
                        text: "First Task",
                        completed: false,
                    },
                    {
                        id: 2,
                        text: "Second Task",
                        completed: false,
                    },
                ]
            }, {
                type: "TOGGLE_TODO",
                id: 1,
            })
        ).toEqual({
            nextTodoId: 3,
            todos: [
                {
                    id: 1,
                    text: "First Task",
                    completed: true,
                },
                {
                    id: 2,
                    text: "Second Task",
                    completed: false,
                },
            ]
        });

        expect(
            todos({
                nextTodoId: 3,
                todos: [
                    {
                        id: 1,
                        text: "First Task",
                        completed: false,
                    },
                    {
                        id: 2,
                        text: "Second Task",
                        completed: true,
                    },
                ]
            }, {
                type: "TOGGLE_TODO",
                id: 2,
            })
        ).toEqual({
            nextTodoId: 3,
            todos: [
                {
                    id: 1,
                    text: "First Task",
                    completed: false,
                },
                {
                    id: 2,
                    text: "Second Task",
                    completed: false,
                },
            ]
        });
    });


});
