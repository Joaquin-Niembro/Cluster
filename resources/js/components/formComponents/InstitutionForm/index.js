import React, { Component } from "react";
import Page from "./page";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { institutionsPost } from "../../../redux/actions/Institutions";
import { connect } from "react-redux";
class InstitutionForm extends Component {
    render() {
        const initialValues = {
            id_institution: "",
            name: "",
            address: ""
        };
        const validationSchema = Yup.object({
            id_institution: Yup.string()
                .min(1, "Debe ser de 11 caractéres")
                .max(11, "Debe ser de 11 caractéres"),
            name: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(30, "Máximo 30 caractéres"),
            address: Yup.string().min(15, "Mínimo 15 caractéres")
        });
        const onSubmit = async (values, props) => {
            await this.props.institutionsPost(values);
            toast.success("Institución registrada!");
            props.resetForm(true);
        };
        return (
            <Page
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            />
        );
    }
}
const mapDispatchToProps = {
    institutionsPost
};
export default connect(null, mapDispatchToProps)(InstitutionForm);
