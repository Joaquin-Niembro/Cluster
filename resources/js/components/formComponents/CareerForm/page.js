import React from "react";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import Career from '../../tableComponents/Career/index'
function page({ initialValues, validationSchema, onSubmit, institutions }) {
    return (
        <div className="careerDiv" style={{ width: "60%" }}>
            <Card className="careerCard">
                <CardHeader
                    title="Registrar Carrera"
                    subheader="Llena los campos para registrar una carrera."
                />
                <CardContent>
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
                                    label="Institución"
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
                                    Registrar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
            <Career/>
        </div>
    );
}

export default page;
