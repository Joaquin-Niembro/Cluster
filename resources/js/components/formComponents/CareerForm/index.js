import React, { Component } from "react";
import { connect } from "react-redux";
import { institutionsFetch } from "../../../redux/actions/Institutions";
import { careersPost } from "../../../redux/actions/Career";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Page from "./page";
class CareerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: true
        };
    }
    componentDidMount() {
        if (this.state.mounted) {
            this.props.institutionsFetch();
        }
    }
    componentWillUnmount() {
        this.setState({ mounted: false });
    }
    render() {
        const { institutions } = this.props.institutions;

        const initialValues = {
            id_career: "",
            name: "",
            institution: ""
        };
        const validationSchema = Yup.object({
            id_career: Yup.string()
                .min(1, "Debe ser de 11 caractéres")
                .max(11, "Debe ser de 11 caractéres"),
            name: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(30, "Máximo 30 caractéres")
        });
        const onSubmit = async (values, props) => {
            await this.props.careersPost(values);
            props.resetForm(true);
            toast.success("Carrera registrada!");
        };
        return (
            <Page
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                institutions={institutions}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        institutions: state.InstitutionReducer
    };
};
const mapDispatchToProps = {
    institutionsFetch,
    careersPost
};
export default connect(mapStateToProps, mapDispatchToProps)(CareerForm);
