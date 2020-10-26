import React from "react";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import { updateSector } from "../../apiRequests/SectorRequests";
import FormikControl from "../../formik/FormikControl";
import * as Yup from "yup";

import { Formik, Form } from "formik";
function SectorForm({id_sector, name, description}) {
    const id = id_sector
    const initialValues = {
        id_sector: id_sector,
        name: name,
        description: description
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
        const {id_sector, name, description} = values
        await updateSector(id,id_sector, name, description );
        toast.success("Actualización satisfactoria!");
        props.resetForm(true);
    };
    return (
        <div className="editSector" >
            
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {formik => (
                            <Form >
                                <FormikControl
                                    control="input"
                                    label="ID Sector"
                                    type="text"
                                    name="id_sector"
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
                                    label="Descripción"
                                    type="text"
                                    name="description"
                                    variant="outlined"
                                    severity="error"
                                    
                                />
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                    className="button"
                                    style={{width: '100%', marginTop: '.5rem'}}
                                >
                                    Registrar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                
        </div>
    );
}

export default SectorForm;
