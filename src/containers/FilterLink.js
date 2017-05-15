import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";
import { withRouter } from "react-router-native";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === (ownProps.match.params.filter || "SHOW_ALL"),
    filter: ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

const FilterLink = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link));

export default FilterLink;
