import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import VisibleTodoList from "../containers/VisibleTodoList";
import AddTodo from "../containers/AddTodo";
import Footer from "./Footer";
import ClearTodo from "../containers/ClearTodo"

const Main = () => (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                Todo App.
            </Text>
            <ClearTodo />
        </View>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </View>
);

export default Main;

const { height, width } = Dimensions.get('window');
var styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        width: (Platform.OS === "web") ? Math.min(width, 640) : null,
        margin: 10,
        justifyContent: 'center',
    },
    titleContainer: {
        flexDirection: "row"
    },
    title: {
        flex: 1,
    },

});
