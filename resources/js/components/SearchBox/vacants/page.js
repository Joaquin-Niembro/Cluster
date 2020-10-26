import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
function Page(props) {
    const { text, vacants, onChangeSelection, onChangeText } = props;
    return (
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={vacants.map(option => option.title)}
            renderInput={params => (
                <TextField
                    {...params}
                    label="freeSolo"
                    margin="normal"
                    variant="outlined"
                />
            )}
        />
    );
}

export default Page;
