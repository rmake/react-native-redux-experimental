import { connect } from "react-redux";
import Link from "../components/Link";
import { withRouter } from "react-router-native";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === (ownProps.match.params.filter || "SHOW_ALL"),
    filter: ownProps.filter,
});

const FilterLink = withRouter(connect(
    mapStateToProps,
)(Link));

export default FilterLink;
