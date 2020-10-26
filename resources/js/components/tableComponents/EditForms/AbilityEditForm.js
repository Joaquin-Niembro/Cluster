import React from 'react'
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import FormikControl from "../../formik/FormikControl";
import {updateAbility} from '../../apiRequests/AbilityRequests'

import { Button } from "@material-ui/core";
import * as Yup from "yup";
function AbilityEditForm({id_ability, name, description}) {
    const id = id_ability
    const initialValues = {
        id_ability: id_ability,
        name: name,
        description: description
    }
    const validationSchema = Yup.object({
        id_ability: Yup.string()
        .min(1, "Debe ser de 11 caractéres")
        .max(11, "Debe ser de 11 caractéres"),
        name: Yup.string()
            .min(4, "Mínimo 4 caractéres")
            .max(30, "Máximo 30 caractéres"),
        description: Yup.string()
            .min(4, "Mínimo 4 caractéres")
            .max(50, "Máximo 50 caractéres")    
    })
    const onSubmit = async (values,props)=>{
        const {id_ability, name, description}= values
        await updateAbility(id, id_ability, name, description)
        toast.success('Registro satisfactorio!')
        props.resetForm(true)
    }
    return (
        <div className='editAbility'>
        
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
                                style={{width: '100%', marginTop: '.5rem'}}
                            >
                                Registrar
                            </Button>
                        </Form>
                    )}
                </Formik>
            
        </div>
    )
}

export default AbilityEditForm