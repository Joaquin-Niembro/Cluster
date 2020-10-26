import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { sectorsFetch } from "../../../redux/actions/Sectors";
import { companiesPost } from "../../../redux/actions/Companies";
import * as Yup from "yup";
import { createCompany } from "../../apiRequests/CompanyRequests";
import { toast } from "react-toastify";
class CompanyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: true
        };
    }
    componentDidMount() {
        if (this.state.mounted) {
            this.props.sectorsFetch();
        }
    }
    componentWillUnmount() {
        this.setState({ mounted: false });
    }
    render() {
        const { sectors } = this.props.sectors;

        const initialValues = {
            id_company: "",
            name: "",
            rfc: "",
            address: "",
            profile: "",
            schedule: "",
            sector: ""
        };
        const validationSchema = Yup.object({
            id_company: Yup.string()
                .min(1, "Debe ser de 11 caractéres")
                .max(11, "Debe ser de 11 caractéres"),
            name: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(30, "Máximo 30 caractéres"),
            rfc: Yup.string()
                .min(12, "Debe ser 12-13 caractéres")
                .max(13, "Debe ser 12-13 caractéres"),
            address: Yup.string()
                .min(4, "Mínimo 10 caractéres")
                .max(100, "Máximo 50 caractéres"),
            profile: Yup.string().min(4, "Mínimo 4 caractéres"),
            schedule: Yup.string().min(15, "Formato 00:00am-00:00pm")
        });
        const onSubmit = async (values, props) => {
            await this.props.companiesPost(values);
            toast.success("Registro satisfactorio!");
            props.resetForm(true);
        };
        return (
            <Page
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                sectors={sectors}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        sectors: state.SectorReducer
    };
};
const mapDispatchToProps = {
    sectorsFetch,
    companiesPost
};
export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm);
