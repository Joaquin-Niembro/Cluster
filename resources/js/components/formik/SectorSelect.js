import React from "react";
import { Field, ErrorMessage } from "formik";
import { Alert } from "@material-ui/lab";
import {
    Select as Selection,
    FormLabel,
    MenuItem,
    FormControl
} from "@material-ui/core";

function SectorSelect(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className="inputDiv">
            <FormControl>
                <FormLabel className="label">{label}</FormLabel>
                <Field
                    as={Selection}
                    name={name}
                    id={name}
                    {...rest}
                    className="field"
                >
                    {
                        options.map(option => {
                                  return (
                                      <MenuItem
                                          key={option.id_sector}
                                          value={option.id_sector}
                                      >
                                          {option.name}
                                      </MenuItem>
                                  );
                              })
                           
                    }
                </Field>
                <ErrorMessage name={name} component={Alert} />
            </FormControl>
        </div>
    );
}

export default SectorSelect;