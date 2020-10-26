import React, { Component } from "react";
import { abilitiesPost } from "../../../redux/actions/Abilities";
import { toast } from "react-toastify";
import Page from "./page";
import * as Yup from "yup";
import { connect } from "react-redux";
class AbilityForm extends Component {
    render() {
        const initialValues = {
            id_ability: "",
            name: "",
            description: ""
        };

        const validationSchema = Yup.object({
            id_ability: Yup.string()
                .min(1, "Debe ser de 11 caractéres")
                .max(11, "Debe ser de 11 caractéres"),
            name: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(30, "Máximo 30 caractéres"),
            description: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(50, "Máximo 50 caractéres")
        });
        const onSubmit = async (values, props) => {
            await this.props.abilitiesPost(values);
            toast.success("Registro satisfactorio!");
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
    abilitiesPost
};
export default connect(null, mapDispatchToProps)(AbilityForm);
