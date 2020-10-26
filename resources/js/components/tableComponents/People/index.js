import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { peopleFetch } from "../../../redux/actions/People";
class People extends Component {
    render() {
        const { people } = this.props.people;
        const { peopleFetch } = this.props;
        return <Page peopleFetch={peopleFetch} people={people} />;
    }
}
const mapStateToProps = state => {
    return {
        people: state.PeopleReducer
    };
};
const mapDispatchToProps = {
    peopleFetch
};
export default connect(mapStateToProps, mapDispatchToProps)(People);
