import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
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
        return (
            <NativeRouter>
                <Switch>
                    <Route path="/" component={TodoPage} />
                    <Route path="/:filter" component={TodoPage}/>
                </Switch>
            </NativeRouter>
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
