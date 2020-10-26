import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AbilityEditForm from "./EditForms/AbilityEditForm";
function EditAbility({ id_ability, name, description }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='abilityEditDiv'>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
            >
                <EditIcon />
                Editar
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Editar Habilidad
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Llena los campos para editar la Habilidad.
                    </DialogContentText>
                    <AbilityEditForm
                        id_ability={id_ability}
                        name={name}
                        description={description}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditAbility;
