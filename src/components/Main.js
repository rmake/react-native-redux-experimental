import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VisibleTodoList from "../containers/VisibleTodoList";
import AddTodo from "../containers/AddTodo";

const Main = () => (
    <View style={styles.container}>
        <Text>
            Main
        </Text>
        <AddTodo />
        <VisibleTodoList />
    </View>
);

export default Main;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
