import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

const TodoList = ({todos, onTodoClick}) => (
    <View>
        {
            todos.map((todo) => (
                <View key={todo.id}>
                    <Text>
                        - {todo.text}
                    </Text>
                </View>
            ))
        }
    </View>
);

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    }
});

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
};

export default TodoList;
