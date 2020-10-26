import React, { Component } from "react";
import Page from "./page";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { createSector } from "../../apiRequests/SectorRequests";
import { sectorsPost } from "../../../redux/actions/Sectors";
import { connect } from "react-redux";
class SectorForm extends Component {
    render() {
        const initialValues = {
            id_sector: "",
            name: "",
            description: ""
        };
        const validationSchema = Yup.object({
            id_sector: Yup.string()
                .min(1, "Debe ser de 11 caractéres")
                .max(11, "Debe ser de 11 caractéres"),
            name: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(30, "Máximo 30 caractéres"),
            description: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(40, "Máximo 30 caractéres")
        });
        const onSubmit = async (values, props) => {
            await this.props.sectorsPost(values);
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
    sectorsPost
};
export default connect(null, mapDispatchToProps)(SectorForm);
