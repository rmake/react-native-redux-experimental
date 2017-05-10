import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VisibleTodoList from "../containers/VisibleTodoList";

const Main = () => (
    <View style={styles.container}>
        <Text>
            Main
        </Text>
        <VisibleTodoList />
    </View>
);

export default Main;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
