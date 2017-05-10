import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions";

const mapStateToProps = (state) => ({
    todos: state.todos.todos,
});

const mapDispatchToProps = {
    onTodoClick: toggleTodo,
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
