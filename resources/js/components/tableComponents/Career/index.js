import React, { Component } from "react";
import { connect } from "react-redux";
import { careersFetch } from "../../../redux/actions/Career";
import Page from "./page";
class Career extends Component {
    render() {
        const { careers } = this.props.careers;
        const { careersFetch } = this.props;
        return <Page careersFetch={careersFetch} careers={careers} />;
    }
}
const mapStateToProps = state => {
    return {
        careers: state.CareerReducer
    };
};
const mapDispatchToProps = {
    careersFetch
};
export default connect(mapStateToProps, mapDispatchToProps)(Career);
