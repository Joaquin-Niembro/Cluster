import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./Page";
import { findResults, findSuggestions, vacantsFetch } from "../../../redux/actions/Vacants";
class VacantSearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }
    
    onChangeText(text) {
        this.setState({ text });
        this.props.findSuggestions(text);
    }
    onChangeSelection(text) {
        this.setState({ text });
        this.props.findResults(text);
    }
    render() {
        const { vacants } = this.props.vacants;
        
        return (
            <Page
                vacants={vacants}
                text={this.state.text}
                onChangeSelection={this.onChangeSelection}
                onChangeText={this.onChangeText}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        vacants: state.VacantReducer
    };
};
const mapDispatchToProps = {
    vacantsFetch,
    findSuggestions,
    findResults
};
export default connect(mapStateToProps, mapDispatchToProps)(VacantSearchBox);
