import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, ScrollView } from "react-native";
import Todo from "./Todo";
import { List } from "immutable";

const TodoList = ({todos, onTodoClick, onRemoveTodoClick}) => (
    <ScrollView style={styles.container}>
        {
            todos.map((todo) => {
                return(<Todo
                    key={todo.id}
                    todo={todo}
                    onTodoClick={() => (onTodoClick(todo.id))}
                    onRemoveTodoClick={() => (onRemoveTodoClick(todo.id))}
                />);
            })
        }
    </ScrollView>
);

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    }
});

TodoList.propTypes = {
    todos: PropTypes.instanceOf(List),
    onTodoClick: PropTypes.func.isRequired,
    onRemoveTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
