import React from "react";
import { Button } from "@material-ui/core";
import {updateInstitution} from '../../apiRequests/InstitutionRequests'
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import * as Yup from "yup";
import { toast } from "react-toastify";
function InstitutionForm({id_institution, name, address}) {
    const id = id_institution
    const initialValues = {
        id_institution: id_institution,
        name: name,
        address: address
    };
    const validationSchema = Yup.object({
        id_institution: Yup.string()
            .min(1, "Debe ser de 11 caractéres")
            .max(11, "Debe ser de 11 caractéres"),
        name: Yup.string()
            .min(3, "Mínimo 4 caractéres")
            .max(30, "Máximo 30 caractéres"),
        address: Yup.string().min(15, "Mínimo 15 caractéres")
    });
    const onSubmit = async (values, props) => {
        const {id_institution, name, address} = values
        await updateInstitution(id, id_institution, name, address)
        toast.success("Actualización satisfactoria!");
        props.resetForm(true);
    };
    return (
        <div className='editInstitution'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => (
                    <Form>
                        <FormikControl
                            control="input"
                            label="ID Institución"
                            type="text"
                            name="id_institution"
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
                            label="Dirección"
                            type="text"
                            name="address"
                            variant="outlined"
                            severity="error"
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            className="button"
                        >
                            Registrar
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default InstitutionForm;
