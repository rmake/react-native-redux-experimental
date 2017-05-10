import { addTodo, toggleTodo } from ".";

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
});
