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
import CompanyEditForm from './EditForms/CompanyEditForm'
function EditCompany({ id_company, name,rfc, address, profile, schedule, sector }) {
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
                    Editar Compañia
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Llena los campos para editar la Compañia.
                    </DialogContentText>
                    <CompanyEditForm
                        id_company={id_company}
                        name={name}
                        address={address}
                        rfc={rfc}
                        profile={profile}
                        schedule={schedule}
                        sector={sector}
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

export default EditCompany;