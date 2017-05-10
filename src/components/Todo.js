import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const Todo = ({todo, onTodoClick}) => (
    <TouchableOpacity style={styles.container} onPress={onTodoClick}>
        <Text>{'\u2022'}</Text>
        <Text style={todo.completed ? styles.completedText : null}>
             {todo.text}
        </Text>
    </TouchableOpacity>
);

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
        alignItems: 'center',
        marginTop: 4,
        borderColor: '#da7',
        borderWidth: 2,
        borderRadius: 10,
    },
    completedText: {
        textDecorationLine: "line-through",
    },
});

export default Todo;
