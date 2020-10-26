import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { companiesFetch } from "../../../redux/actions/Companies";
class Company extends Component {
    render() {
        const { companies } = this.props.companies;
        const { companiesFetch } = this.props;
        return <Page companiesFetch={companiesFetch} companies={companies} />;
    }
}
const mapStateToProps = state => {
    return {
        companies: state.CompanyReducer
    };
};
const mapDispatchToProps = {
    companiesFetch
};
export default connect(mapStateToProps, mapDispatchToProps)(Company);
