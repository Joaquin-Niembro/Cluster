import React from "react";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import Institution from "../../tableComponents/Institution/index";
function page({ initialValues, validationSchema, onSubmit }) {
    return (
        <div className="institutionContainer" style={{ width: "70%" }}>
            <Card className="institutionCard">
                <CardHeader
                    title="Registrar Institución"
                    subheader="Llena los campos para registrar una institución."
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
                </CardContent>
            </Card>
            <Institution />
        </div>
    );
}

export default page;
