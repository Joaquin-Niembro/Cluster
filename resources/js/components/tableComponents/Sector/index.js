import React, { Component } from "react";
import { connect } from "react-redux";
import { sectorsFetch } from "../../../redux/actions/Sectors";
import Page from "./page";
class Sector extends Component {
    render() {
        const { sectors } = this.props.sectors;

        return (
            <Page sectors={sectors} sectorsFetch={this.props.sectorsFetch} />
        );
    }
}
const mapStateToProps = state => {
    return {
        sectors: state.SectorReducer
    };
};
const mapDispatchToProps = {
    sectorsFetch
};
export default connect(mapStateToProps, mapDispatchToProps)(Sector);
