import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import Todo from "./Todo";

const TodoList = ({todos, onTodoClick}) => (
    <View style={styles.container}>
        {
            todos.map((todo) => {
                return(<Todo
                    key={todo.id}
                    todo={todo}
                    onTodoClick={() => (onTodoClick(todo.id))}
                />);
            })
        }
    </View>
);

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    }
});

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
