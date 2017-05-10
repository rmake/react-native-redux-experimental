import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { StyleSheet, View, TextInput} from "react-native";

let AddTodo = ({ dispatch }) => {
    let input = null

    return (
        <View style={styles.container}>
            <TextInput
                ref={(node) => {
                    input = node;
                }}
                style={styles.textInput}
                onChangeText={(text) => {
                    lastText = text;
                }}
                onSubmitEditing={
                    (event) => {
                        dispatch(addTodo(event.nativeEvent.text));
                        input.clear();
                    }
                }
            />
        </View>
    );
};

AddTodo = connect()(AddTodo);

var styles = StyleSheet.create({
    container: {

    },
    textInput: {
        borderColor: '#777',
        borderWidth: 1,
    }
});

export default AddTodo
