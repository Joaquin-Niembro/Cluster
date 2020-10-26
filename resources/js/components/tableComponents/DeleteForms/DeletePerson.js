import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core";
import { deletePerson } from "../../apiRequests/PeopleRequests";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast } from "react-toastify";
function DeleteCareer({ id_person }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onClick = async id => {
        await deletePerson(id);
        toast.info("deleted succesfully");
    };
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
            >
                <DeleteIcon />
                Borrar
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    ¿Seguro que desea eliminar?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Al eliminarla no podrá ser recuperada.
                    </DialogContentText>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ width: "100%" }}
                        onClick={() => onClick(id_person)}
                    >
                        Eliminar
                    </Button>
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

export default DeleteCareer;
