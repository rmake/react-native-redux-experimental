import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import VisibleTodoList from "./VisibleTodoList";
import AddTodo from "./AddTodo";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { checkInitialTodos } from "../actions";
import ClearTodo from "./ClearTodo";

class Main extends React.Component {

    componentDidMount() {
        if (this.props.storage.starting) {
            this.props.onFirstMount();
        }
    }

    render() {
        return (
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
    }
}

const mapStateToProps = (state) => ({
    storage: state.storage
});

const mapDispatchToProps = {
    onFirstMount: checkInitialTodos,
}

Main = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);

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
