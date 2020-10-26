import React, { useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    TableHead
} from "@material-ui/core";
import DeleteInstitution from "../../tableComponents/DeleteForms/DeleteInstitution";
import EditInstitution from "../EditInstitution";
function page({ institutions, institutionsFetch }) {
    useEffect(() => {
        institutionsFetch();
    }, [institutions]);
    return (
        <div className="tableDiv">
            <h1>Institutciones</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID Institucion</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Dirección</TableCell>
                            <TableCell align="center">Editar</TableCell>
                            <TableCell align="center">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {institutions.map(institution => (
                            <TableRow key={institution.id_institution}>
                                <TableCell align="center">
                                    {institution.id_institution}
                                </TableCell>
                                <TableCell align="center">
                                    {institution.name}
                                </TableCell>
                                <TableCell align="center">
                                    {institution.address}
                                </TableCell>

                                <TableCell align="center">
                                    <EditInstitution
                                        id_institution={
                                            institution.id_institution
                                        }
                                        name={institution.name}
                                        address={institution.address}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <DeleteInstitution
                                        id_institution={
                                            institution.id_institution
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default page;
