import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, TouchableHighlight} from "react-native";
import { Link } from "react-router-native";

const ThisLink = ({active, children, onClick, filter }) => {

    if (active) {
        return (
            <View style={[styles.button, styles.selected]}>
                {children}
            </View>
        );
    }

    return (
        <Link style={[styles.button, styles.notSelected]} to={`/${filter}`}>
            {children}
        </Link>
    );
};

let styles = StyleSheet.create({
    button: {
        minWidth: 60,
        flexDirection: "row",
        height: 50,
        alignItems: 'center',
        marginTop: 4,
        borderWidth: 2,
        borderRadius: 10,
        margin: 2,
    },
    selected: {
        borderColor: '#7ad',
    },
    notSelected: {
        borderColor: '#555',
    },
});

export default ThisLink;
