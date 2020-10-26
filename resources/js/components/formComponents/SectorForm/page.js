import React from 'react'
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";
import FormikControl from "../../formik/FormikControl";
import { Formik, Form } from "formik";
import Sector from '../../tableComponents/Sector/index'
function page({initialValues, validationSchema, onSubmit}) {
    return (
        <div className="careerDiv">
            <Card className="sectorCard">
                <CardHeader
                    title="Registrar Sector"
                    subheader="Llena los campos para registrar un sector."
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
                                >
                                    Registrar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
            <Sector/>
        </div>
    )
}

export default page
