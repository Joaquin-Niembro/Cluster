import React from "react";
import Input from "./Input";
import Select from "./Select";
import CareerSelect from "./CareerSelect";
import SectorSelect from "./SectorSelect";
import CompanySelect from "./CompanySelect";
import AbilitySelect from "./AbilitySelect";
function FormikControl({ control, ...rest }) {
    switch (control) {
        case "input":
            return <Input {...rest} />;
        case "select":
            return <Select {...rest} />;
        case "Careerselect":
            return <CareerSelect {...rest} />;
        case "Sectorselect":
            return <SectorSelect {...rest} />;
        case "Companyselect":
            return <CompanySelect {...rest} />;
        case "Abilityselect":
            return <AbilitySelect {...rest} />;

        default:
            return null;
    }
}

export default FormikControl;
