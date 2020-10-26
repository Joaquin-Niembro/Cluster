import React from 'react'
import {TextField, FormLabel, FormControl} from '@material-ui/core'
import { Field, ErrorMessage } from 'formik'
import {Alert} from '@material-ui/lab'

/*const Wrapper = styled.div`
	text-align: center;
	.label {
		font-size: 1.5rem;
		margin: 0.5rem;
	}
	.input {
		width: 40rem;
		margin: 0.5rem auto;
	}
`;*/
function Input({label, name, variant,type, severity, ...rest}) {
    return (
        <div className='inputDiv'>
            <FormControl>
                <FormLabel className='label'>{label}</FormLabel>
                <Field 
                className='input'
                as={TextField}
                id={name}
                name={name}
                variant={variant}
                type={type}
                placeholder={`Ingresa tu ${name}`}
                {...rest}
                />
                <ErrorMessage name={name} component={Alert} severity={severity}/>
            </FormControl>
        </div>
    )
}

export default Input