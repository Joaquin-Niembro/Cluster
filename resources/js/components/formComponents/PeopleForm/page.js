import React from "react";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import { Formik, Form } from "formik";
import FormikControl from "../../formik/FormikControl";
import People from "../../tableComponents/People/index";
function page({
    initialValues,
    institutions,
    validationSchema,
    onSubmit,
    careers
}) {
    return (
        <div className="peopleDiv">
            <Card className="peopleCard">
                <CardHeader
                    title="Registrar Profesionista"
                    subheader="Llena los campos para registrar un profesionista."
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
                                >
                                    Registrar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
            <People />
        </div>
    );
}

export default page;
