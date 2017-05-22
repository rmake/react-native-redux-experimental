import {todos, initialState} from "./todos";
import TodosModel from "../models/TodosModel";

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
            }).toJS()
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
            todos(TodosModel.create({
                nextTodoId: 2,
                todos: [
                    {
                        id: 1,
                        text: "First Task",
                        completed: false,
                    }
                ]
            }), {
                type: "ADD_TODO",
                text: "Second Task",
            }).toJS()
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
            todos(TodosModel.create({
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
            }), {
                type: "ADD_TODO",
                text: "Third Task",
            }).toJS()
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
            todos(TodosModel.create({
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
            }), {
                type: "TOGGLE_TODO",
                id: 1,
            }).toJS()
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
            todos(TodosModel.create({
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
            }), {
                type: "TOGGLE_TODO",
                id: 2,
            }).toJS()
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

    it("should handle REMOVE_TODO", () => {
        expect(
            todos(TodosModel.create({
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
            }), {
                type: "REMOVE_TODO",
                id: 1,
            }).toJS()
        ).toEqual({
            nextTodoId: 3,
            todos: [
                {
                    id: 2,
                    text: "Second Task",
                    completed: false,
                },
            ]
        });
    });

    it("should handle CLEAR_TODO", () => {
        expect(
            todos(TodosModel.create({
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
            }), {
                type: "CLEAR_TODO",
            }).toJS()
        ).toEqual({
            nextTodoId: 3,
            todos: [],
        });
    });

});
