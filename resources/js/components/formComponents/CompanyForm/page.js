import React from "react";
import { Formik, Form } from "formik";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import FormikControl from "../../formik/FormikControl";
import Company from "../../tableComponents/Company/index";
function page({ initialValues, validationSchema, onSubmit, sectors }) {
    return (
        <div className="peopleDiv">
            <Card className="peopleCard">
                <CardHeader
                    title="Registrar Compañia"
                    subheader="Llena los campos para registrar una compañia."
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
                                >
                                    Registrar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
            <Company />
        </div>
    );
}

export default page;
