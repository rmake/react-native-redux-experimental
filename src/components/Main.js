import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
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

const { height, width } = Dimensions.get('screen');
var styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        width: (Platform.OS === "web") ? Math.min(width, 640) : null,
        margin: 10,
        justifyContent: 'center',
    }
});
