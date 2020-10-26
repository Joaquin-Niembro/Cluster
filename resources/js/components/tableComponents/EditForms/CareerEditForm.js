import React, { useEffect, useState } from "react";
import { updateCareer } from "../../apiRequests/CareerRequests";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { getInstitutions } from "../../apiRequests/InstitutionRequests";
import FormikControl from "../../formik/FormikControl";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
function CareerEditForm({ id_career, name, institution }) {
    const [institutions, setInstitutions] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const res = await getInstitutions();
            setInstitutions(res);
        };
        fetch();
    }, [institutions]);
    const initialValues = {
        id_career: id_career,
        name: name,
        institution: institution
    };
    const validationSchema = Yup.object({
        id_career: Yup.number("Debe ser número entero"),
        name: Yup.string()
            .min(4, "Mínimo 4 caractéres")
            .max(30, "Máximo 30 caractéres")
    });
    const onSubmit = async (values, props) => {
        const { id_career, name, institution } = values;
        await updateCareer(id_career, name, institution);
        
        
        toast.success("Carrera actualizada!");
        
    };
    return (
        <div className="editCareer">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => (
                    <Form>
                        <FormikControl
                            control="input"
                            label="ID Carrera"
                            type="text"
                            name="id_career"
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
                            control="select"
                            label="Institucion"
                            options={institutions}
                            type="text"
                            name="institution"
                            variant="outlined"
                            severity="error"
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            className="button"
                        >
                            Editar
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CareerEditForm;
