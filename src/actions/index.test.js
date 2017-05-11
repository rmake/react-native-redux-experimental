import { addTodo, toggleTodo,
    removeTodo, clearTodo,
    setVisibilityFilter } from ".";

describe("todo action", () => {
    it("addTodo should create ADD_TODO action", () => {
        expect(addTodo("first task")).toEqual(
            {
                type: "ADD_TODO",
                text: "first task",
            }
        );
    });
    it("toggleTodo should create TOGGLE_TODO action", () => {
        expect(toggleTodo(1)).toEqual(
            {
                type: "TOGGLE_TODO",
                id: 1,
            }
        );
    });

    it("removeTodo should create REMOVE_TODO action", () => {
        expect(removeTodo(1)).toEqual(
            {
                type: "REMOVE_TODO",
                id: 1,
            }
        );
    });

    it("clearTodo should create CLEAR_TODO action", () => {
        expect(clearTodo()).toEqual(
            {
                type: "CLEAR_TODO",
            }
        );
    });
});

describe("visibility filter action", () => {
    it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
        expect(setVisibilityFilter("SHOW_ALL")).toEqual(
            {
                type: "SET_VISIBILITY_FILTER",
                filter: "SHOW_ALL",
            }
        );
    });
})
