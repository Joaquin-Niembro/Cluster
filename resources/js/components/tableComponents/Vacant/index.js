import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { vacantsFetch } from "../../../redux/actions/Vacants";
class Vacant extends Component {
    render() {
        const { vacants } = this.props.vacants;
        const { vacantsFetch } = this.props;
        return <Page vacantsFetch={vacantsFetch} vacants={vacants} />;
    }
}
const mapStateToProps = state => {
    return {
        vacants: state.VacantReducer
    };
};
const mapDispatchToProps = {
    vacantsFetch
};
export default connect(mapStateToProps, mapDispatchToProps)(Vacant);
