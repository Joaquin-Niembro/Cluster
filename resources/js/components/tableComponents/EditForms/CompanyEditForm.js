import React, { useEffect, useState } from "react";
import { updateCompany } from "../../apiRequests/CompanyRequests";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { getSectors } from "../../apiRequests/SectorRequests";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import FormikControl from "../../formik/FormikControl";

function CompanyForm({
    id_company,
    name,
    rfc,
    address,
    profile,
    schedule,
    sector
}) {
    const id = id_company;
    const [sectors, setSectors] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const res = await getSectors();
            setSectors(res);
        };
        fetch();
    }, [sectors]);
    const initialValues = {
        id_company: id_company,
        name: name,
        rfc: rfc,
        address: address,
        profile: profile,
        schedule: schedule,
        sector: sector
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
        const {
            id_company,
            name,
            rfc,
            address,
            profile,
            schedule,
            sector
        } = values;
        await updateCompany(
            id,
            id_company,
            name,
            rfc,
            address,
            profile,
            schedule,
            sector
        );
        toast.success("Actualziación satisfactoria!");
        props.resetForm(true);
    };
    return (
        <div className="companyDiv">
            <div className="companyCard">
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
                                        label="ID Compañia"
                                        type="text"
                                        name="id_company"
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
                                        label="RFC"
                                        type="text"
                                        name="rfc"
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
                                </div>
                                <div style={{ margin: ".5rem" }}>
                                    <FormikControl
                                        control="input"
                                        label="Perfil"
                                        type="text"
                                        name="profile"
                                        variant="outlined"
                                        severity="error"
                                    />
                                    <FormikControl
                                        control="input"
                                        label="Horario"
                                        type="text"
                                        name="schedule"
                                        variant="outlined"
                                        severity="error"
                                    />
                                    <FormikControl
                                        control="Sectorselect"
                                        label="Sector"
                                        options={sectors}
                                        type="text"
                                        name="sector"
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

export default CompanyForm;
