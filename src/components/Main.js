import React from "react";
import { StyleSheet, Text, View } from "react-native";
import VisibleTodoList from "../containers/VisibleTodoList";
import AddTodo from "../containers/AddTodo";
import Footer from "./Footer";

const Main = () => (
    <View style={styles.container}>
        <Text>
            Todo App.
        </Text>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </View>
);

export default Main;

var styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        margin: 10,
        justifyContent: 'center',
    }
});
