import React from "react";
import { Formik, Form } from "formik";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import FormikControl from "../../formik/FormikControl";
import Ability from '../../tableComponents/Ability/index'
function page({ initialValues, validationSchema, onSubmit }) {
    return (
        <div className="abilityDiv">
            <Card className="abilityCard">
                <CardHeader
                    title="Registrar Habilidad"
                    subheader="Llena los campos para registrar una habilidad."
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
                                    label="ID Habilidad"
                                    type="text"
                                    name="id_ability"
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
                                >
                                    Registrar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
            <Ability />
        </div>
    );
}

export default page;
