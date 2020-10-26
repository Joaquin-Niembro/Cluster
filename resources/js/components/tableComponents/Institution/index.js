import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { institutionsFetch } from "../../../redux/actions/Institutions";
class Institution extends Component {
    render() {
        const { institutions } = this.props.institutions;
        const { institutionsFetch } = this.props;
        return (
            <Page
                institutionsFetch={institutionsFetch}
                institutions={institutions}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        institutions: state.InstitutionReducer
    };
};
const mapDispatchToProps = {
    institutionsFetch
};
export default connect(mapStateToProps, mapDispatchToProps)(Institution);
