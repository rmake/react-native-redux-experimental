
import { Record, List } from "immutable";
import TodoModel from "./TodoModel";

export default class TodosModel extends Record({
    nextTodoId: 1,
    todos: List.of(),
}) {
    static create(o) {
        return new TodosModel({
            "nextTodoId" : o.nextTodoId,
            "todos": new List(o.todos.map(v => new TodoModel(v))),
        });
    }

    add(text) {
        return this.set("nextTodoId", this.nextTodoId + 1).
            set("todos", this.todos.push(new TodoModel({
                id: this.nextTodoId,
                text
            })))
    }
}
