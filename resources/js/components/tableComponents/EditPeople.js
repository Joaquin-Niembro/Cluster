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
import PersonEditForm from "./EditForms/PersonEditForm";
function EditPeople({
    id_person,
    name,
    apellidoPaterno,
    apellidoMaterno,
    email,
    address,
    institution,
    career
}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
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
                    Editar Institución
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Llena los campos para editar la Institución.
                    </DialogContentText>
                    <PersonEditForm
                        id_person={id_person}
                        name={name}
                        apellidoPaterno={apellidoPaterno}
                        apellidoMaterno={apellidoMaterno}
                        address={address}
                        email={email}
                        institution={institution}
                        career={career}
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

export default EditPeople;
