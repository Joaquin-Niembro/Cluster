import React, { Component } from "react";
import { abilitiesFetch } from "../../../redux/actions/Abilities";
import { companiesFetch } from "../../../redux/actions/Companies";
import { vacantsPost } from "../../../redux/actions/Vacants";
import Page from "./page";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { createVacant } from "../../apiRequests/VacantRequests";

class VacantForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: true
        };
    }

    componentDidMount() {
        if (this.state.mounted) {
            this.props.abilitiesFetch();
            this.props.companiesFetch();
        }
    }
    componentWillUnmount() {
        this.setState({ mounted: false });
    }
    render() {
        const { abilities } = this.props.abilities;
        const { companies } = this.props.companies;
        const initialValues = {
            id_vacant: "",
            description: "",
            salary: "",
            duration: "",
            company: "",
            ability: ""
        };
        const validationSchema = Yup.object({
            id_vacant: Yup.string()
                .min(1, "Debe ser de 11 caractéres")
                .max(11, "Debe ser de 11 caractéres"),
            description: Yup.string()
                .min(10, "Mínimo 10 caractéres")
                .max(100),
            salary: Yup.number(),
            duration: Yup.string()
                .min(1, "Debe ser de 11 caractéres")
                .max(11, "Debe ser de 11 caractéres")
        });
        const onSubmit = async (values, props) => {
            await this.props.vacantsPost(values);
            toast.success("Registro satisfactorio!");
            props.resetForm(true);
        };
        return (
            <Page
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                abilities={abilities}
                companies={companies}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        abilities: state.AbilityReducer,
        companies: state.CompanyReducer
    };
};
const mapDispatchToProps = {
    abilitiesFetch,
    companiesFetch,
    vacantsPost
};
export default connect(mapStateToProps, mapDispatchToProps)(VacantForm);
