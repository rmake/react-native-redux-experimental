import React from "react";
import { connect } from "react-redux";
import { clearTodo } from "../actions";
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";

let ClearTodo = ({ dispatch}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            dispatch(clearTodo());
        }} style={styles.button}>
            <Text>
                Clear
            </Text>
        </TouchableOpacity>
    </View>
);

ClearTodo = connect()(ClearTodo);

let styles = StyleSheet.create({
    container: {
        margin: 2,
        flexDirection: "row",
    },
    button: {
        height: 50,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        borderColor: '#666',
        borderWidth: 2,
        borderRadius: 10,
    }
});

export default ClearTodo;
