import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { Button } from "@material-ui/core";
import { getCompanies } from "../../apiRequests/CompanyRequests";
import { updateVacant } from "../../apiRequests/VacantRequests";
import { getAbilities } from "../../apiRequests/AbilityRequests";
import * as Yup from "yup";
import FormikControl from "../../formik/FormikControl";

function VacantForm({
    id_vacant,
    description,
    salary,
    duration,
    company,
    ability
}) {
    const id = id_vacant;
    const [companies, setCompanies] = useState([]);
    const [abilities, setAbilities] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const res = await getCompanies();
            const response = await getAbilities();
            setCompanies(res);
            setAbilities(response);
        };
        fetch();
    }, [companies, abilities]);
    const initialValues = {
        id_vacant: id_vacant,
        description: description,
        salary: salary,
        duration: duration,
        company: company,
        ability: ability
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
        const {
            id_vacant,
            description,
            salary,
            duration,
            company,
            ability
        } = values;
        await updateVacant(
            id,
            id_vacant,
            description,
            salary,
            duration,
            company,
            ability
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
                                        label="ID Vacante"
                                        type="text"
                                        name="id_vacant"
                                        variant="outlined"
                                        severity="error"
                                    />
                                    <FormikControl
                                        control="input"
                                        label="Descripción"
                                        type="text"
                                        name="description"
                                        variant="outlined"
                                        severity="error"
                                    />
                                    <FormikControl
                                        control="input"
                                        label="Salario"
                                        type="text"
                                        name="salary"
                                        variant="outlined"
                                        severity="error"
                                    />
                                </div>
                                <div style={{ margin: ".5rem" }}>
                                    <FormikControl
                                        control="input"
                                        label="Duración"
                                        type="text"
                                        name="duration"
                                        variant="outlined"
                                        severity="error"
                                    />

                                    <FormikControl
                                        control="Companyselect"
                                        label="Compañia"
                                        options={companies}
                                        type="text"
                                        name="company"
                                        variant="outlined"
                                        severity="error"
                                    />
                                    <FormikControl
                                        control="Abilityselect"
                                        label="Habilidad"
                                        options={abilities}
                                        type="text"
                                        name="ability"
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
                                style={{ width: "100%" }}
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

export default VacantForm;
