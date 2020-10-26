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
import VacantEditForm from "./EditForms/VacantEditForm";
function EditPeople({
    id_vacant,
    description,
    salary,
    duration,
    company,
    ability
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
                <DialogTitle id="form-dialog-title">Editar Vacante</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Llena los campos para editar la Vacante.
                    </DialogContentText>
                    <VacantEditForm
                        id_vacant={id_vacant}
                        description={description}
                        salary={salary}
                        duration={duration}
                        company={company}
                        ability={ability}
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
