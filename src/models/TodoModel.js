import { Record } from "immutable";

export default  class TodoModel extends Record({
    id: 0,
    text: "",
    completed: false,
}) {
    static create(o) {
        return new TodoModel(o);
    }

    toggle(id) {
        if (this.id == id) {
            return this.set("completed", !this.completed);
        }
        return this;
    }
}
