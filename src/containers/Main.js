import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { checkInitialTodos } from "../actions";
import routes from "../routes"
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import TodoPage from "../components/TodoPage";

class Main extends React.Component {

    componentDidMount() {
        if (this.props.storage.starting) {
            this.props.onFirstMount();
        }
    }

    render() {

        if (this.props.storage.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        />
                </View>
            );
        }

        return (

            <NativeRouter>
                <View style={styles.container}>
                    <Route path="/:filter(\w*)" component={TodoPage}/>
                </View>
            </NativeRouter>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        justifyContent: 'center',
    },
    loading: {
        height: 50,
    }
});

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
