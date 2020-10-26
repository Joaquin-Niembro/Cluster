import React, { useEffect, useState } from "react";
import { getInstitutions } from "../../apiRequests/InstitutionRequests";
import { getCareers } from "../../apiRequests/CareerRequests";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";

import { toast } from "react-toastify";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import { updatePerson } from "../../apiRequests/PeopleRequests";
function PersonEditForm({
    id_person,
    name,
    apellidoPaterno,
    apellidoMaterno,
    email,
    address,
    institution,
    career
}) {
    const [institutions, setInstitutions] = useState([]);
    const [careers, setCareers] = useState([]);
    const id = id_person;
    useEffect(() => {
        const fetch = async () => {
            setInstitutions(await getInstitutions());
            setCareers(await getCareers());
        };
        fetch();
    }, [institutions, careers]);
    const initialValues = {
        id_person: id_person,
        name: name,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        email: email,
        address: address,
        institution: institution,
        career: career
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
        const {
            id_person,
            name,
            apellidoPaterno,
            apellidoMaterno,
            email,
            address,
            institution,
            career
        } = values;
        await updatePerson(
            id,
            id_person,
            name,
            apellidoPaterno,
            apellidoMaterno,
            email,
            address,
            institution,
            career
        );
        toast.success("Actualización satisfactoria!");
        props.resetForm(true);
    };
    return (
        <div className="peopleDiv">
            <div className="peopleCard">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => (
                    <Form>
                        <div className="formContainer">
                            <div style={{ margin: ".5rem" }}>
                                <FormikControl
                                    control="input"
                                    label="ID Persona"
                                    type="text"
                                    name="id_person"
                                    variant="outlined"
                                    severity="error"
                                />
                                <FormikControl
                                    control="input"
                                    label="Nombre"
                                    type="text"
                                    name="name"
                                    variant="outlined"
                                    severity="error"
                                />
                                <FormikControl
                                    control="input"
                                    label="Apellido Paterno"
                                    type="text"
                                    name="apellidoPaterno"
                                    variant="outlined"
                                    severity="error"
                                />
                                <FormikControl
                                    control="input"
                                    label="Apellido Materno"
                                    type="text"
                                    name="apellidoMaterno"
                                    variant="outlined"
                                    severity="error"
                                />
                            </div>
                            <div style={{ margin: ".5rem" }}>
                                <FormikControl
                                    control="input"
                                    label="E-Mail"
                                    type="text"
                                    name="email"
                                    variant="outlined"
                                    severity="error"
                                />
                                <FormikControl
                                    control="input"
                                    label="Dirección"
                                    type="text"
                                    name="address"
                                    variant="outlined"
                                    severity="error"
                                />
                                <FormikControl
                                    control="select"
                                    label="Institución"
                                    options={institutions}
                                    type="text"
                                    name="institution"
                                    variant="outlined"
                                    severity="error"
                                />
                                <FormikControl
                                    control="Careerselect"
                                    label="Carrera"
                                    options={careers}
                                    type="text"
                                    name="career"
                                    variant="outlined"
                                    severity="error"
                                />
                            </div>
                        </div>
                        
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            className="button"
                            style={{width: '100%'}}
                        >
                            Registrar
                        </Button>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
    );
}

export default PersonEditForm;
