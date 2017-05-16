import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, removeTodo } from "../actions";
import { withRouter } from "react-router-native";

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(todo => todo.completed);
        case "SHOW_ACTIVE":
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos.todos, (ownProps.match.params.filter || "SHOW_ALL")),
});

const mapDispatchToProps = {
    onTodoClick: toggleTodo,
    onRemoveTodoClick: removeTodo,
};

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));

export default VisibleTodoList;
