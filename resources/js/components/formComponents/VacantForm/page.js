import React  from "react";
import { Formik, Form } from "formik";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import FormikControl from "../../formik/FormikControl";
import Vacant from '../../tableComponents/Vacant/index'
function page({
    initialValues,
    validationSchema,
    onSubmit,
    abilities,
    companies
}) {
    
    return (
        <div className="peopleDiv">
            <Card className="peopleCard">
                <CardHeader
                    title="Registrar Vacante"
                    subheader="Llena los campos para registrar una vacante."
                />
                <CardContent>
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
                                >
                                    Registrar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
            <Vacant/>
        </div>
    );
}

export default page;
