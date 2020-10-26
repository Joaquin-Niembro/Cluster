import React, { Component } from "react";
import { connect } from "react-redux";
import { abilitiesFetch } from "../../../redux/actions/Abilities";
import Page from "./page";
class Ability extends Component {
    render() {
        const { abilities } = this.props.abilities;
        const { abilitiesFetch } = this.props;
        return <Page abilitiesFetch={abilitiesFetch} abilities={abilities} />;
    }
}
const mapSatetToProps = state => {
    return {
        abilities: state.AbilityReducer
    };
};
const mapDispatchToProps = {
    abilitiesFetch
};
export default connect(mapSatetToProps, mapDispatchToProps)(Ability);
