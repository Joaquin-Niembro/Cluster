import React, { Component } from "react";
import Page from "./page";
import * as Yup from "yup";
import { institutionsFetch } from "../../../redux/actions/Institutions";
import { peoplePost } from "../../../redux/actions/People";
import { careersFetch } from "../../../redux/actions/Career";
import { connect } from "react-redux";
import { toast } from "react-toastify";
class PeopleForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: true
        };
    }
    componentDidMount() {
        if (this.state.mounted) {
            this.props.institutionsFetch();
            this.props.careersFetch();
        }
    }
    componentWillUnmount() {
        this.setState({ mounted: false });
    }
    render() {
        const { institutions } = this.props.institutions;
        const { careers } = this.props.careers;

        const initialValues = {
            id_person: "",
            name: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            email: "",
            address: "",
            institution: "",
            career: ""
        };
        const validationSchema = Yup.object({
            id_person: Yup.string()
                .min(1, "Debe ser de 11 caractéres")
                .max(11, "Debe ser de 11 caractéres"),
            name: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(30, "Máximo 30 caractéres"),
            apellidoPaterno: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(30, "Máximo 30 caractéres"),
            apellidoMaterno: Yup.string()
                .min(4, "Mínimo 4 caractéres")
                .max(30, "Máximo 30 caractéres"),
            email: Yup.string().email("Formato de email inválido")
        });
        const onSubmit = async (values, props) => {
            await this.props.peoplePost(values);
            toast.success("Registro satisfactorio!");
            props.resetForm(true);
        };
        return (
            <Page
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                institutions={institutions}
                careers={careers}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        institutions: state.InstitutionReducer,
        careers: state.CareerReducer
    };
};
const mapDispatchToProps = {
    institutionsFetch,
    careersFetch,
    peoplePost
};
export default connect(mapStateToProps, mapDispatchToProps)(PeopleForm);
