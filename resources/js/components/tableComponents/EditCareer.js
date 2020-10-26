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
import CareerEditForm from './EditForms/CareerEditForm'
function EditCareer({id_career, name, institution}) {
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
                    Editar Carrera
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Llena los campos para editar la carrera.
                    </DialogContentText>
                    <CareerEditForm id_career={id_career} name={name} institution={institution} />
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

export default EditCareer;
